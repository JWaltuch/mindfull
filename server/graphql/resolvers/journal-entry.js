const JournalEntry = require('../../database/models/journal-entry')
const Record = require('../../database/models/record')

module.exports = {
  journalEntries: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const journalEntries = await JournalEntry.findAll({
          where: {recordId: args.journalInput.recordId}
        })
        return journalEntries
      } catch (error) {
        throw new Error(error)
      }
    }
  },
  createJournalEntry: async (args, req) => {
    if (!req.isAuth) {
      throw new Error('No user logged in.')
    } else {
      try {
        const currentRecord = await Record.findOne({
          where: {recordId: args.journalInput.recordId}
        })
        const entry = await JournalEntry.create({
          entry: args.journalInput.entry,
          emotion: args.journalInput.emotion
        })
        await entry.setRecord(currentRecord)
        return entry
      } catch (error) {
        throw new Error(error)
      }
    }
  }
}
