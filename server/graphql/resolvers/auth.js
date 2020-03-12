const User = require('../../database/models/user')
const jwt = require('jsonwebtoken')
if (process.env.NODE_ENV !== 'production') require('../../../secrets')

module.exports = {
  signUp: async ({userInput}) => {
    try {
      let existingUser = await User.findOne({
        where: {email: userInput.email}
      })
      if (existingUser) {
        throw new Error('This email is already taken.')
      }
      let newUser = await User.create({
        username: userInput.username,
        email: userInput.email,
        password: userInput.password
      })
      jwt.sign({userId: newUser.id}, process.env.SESSION_SECRET, {
        expiresIn: '2h'
      })
      return {...newUser, password: null}
    } catch (error) {
      console.log(error)
    }
  },
  login: async ({email, password}) => {
    try {
      let existingUser = await User.findOne({
        where: {email: email}
      })
      if (!existingUser) {
        throw new Error('Email or password is incorrect.')
      } else if (!existingUser.correctPassword(password)) {
        throw new Error('Email or password is incorrect.')
      } else {
        const token = jwt.sign(
          {userId: existingUser.id},
          process.env.SESSION_SECRET,
          {expiresIn: '2h'}
        )
        return {userId: existingUser.id, token: token, tokenExpiration: 2}
      }
    } catch (error) {
      console.log(error)
    }
  },
  getMe: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const user = await User.findOne({where: {id: req.userId}})
        return {user}
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
