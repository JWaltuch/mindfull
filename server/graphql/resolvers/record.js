const Record = require('../../database/models/record')
const User = require('../../database/models/user')

module.exports = {
  records: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const records = await Record.findAll({where: {userId: req.userId}})
        return records
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  record: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const record = await Record.findOne({
          where: {id: args.id}
        })
        return record
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  createRecord: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const currentUser = await User.findOne({where: {userId: req.userId}})
        const record = await Record.create(args.recordInput)
        await record.setUser(currentUser)
        return record
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
