const User = require('../../database/models/user')

module.exports = {
  users: async () => {
    try {
      let allUsers = await User.findAll()
      return allUsers
    } catch (error) {
      console.log(error)
    }
  },
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
      return {...newUser, password: null}
    } catch (error) {
      console.log(error)
    }
  }
}
