const User = require('../../database/models/user')

module.exports = {
  signUp: async args => {
    try {
      let existingUser = await User.findOne({where: {email: args.email}})
      if (existingUser) {
        throw new Error('This email is already taken.')
      }
      let newUser = await User.create({
        username: args.username,
        email: args.email,
        password: args.password
      })
      return newUser
    } catch (error) {
      console.log(error)
    }
  }
}
