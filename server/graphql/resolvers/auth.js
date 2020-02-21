const User = require('../../database/models/user')
const passport = require('../../app')

module.exports = {
  users: async () => {
    try {
      let allUsers = await User.findAll()
      return allUsers
    } catch (error) {
      console.log(error)
    }
  },
  me: async () => {},
  signUp: async args => {
    try {
      let existingUser = await User.findOne({
        where: {email: args.userInput.email}
      })
      if (existingUser) {
        throw new Error('This email is already taken.')
      }
      let newUser = await User.create({
        username: args.userInput.username,
        email: args.userInput.email,
        password: args.userInput.password
      })
      passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/login'
      })
      return {...newUser, password: null}
    } catch (error) {
      console.log(error)
    }
  }
}
