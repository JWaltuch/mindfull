const User = require('./user')
const Record = require('./record')
const JournalEntry = require('./journal-entry')

//relations

Record.belongsTo(User)
User.hasMany(Record)

JournalEntry.belongsTo(Record)
Record.hasMany(JournalEntry)

JournalEntry.belongsTo(User)
User.hasMany(JournalEntry)

module.exports = {User, Record, JournalEntry}
