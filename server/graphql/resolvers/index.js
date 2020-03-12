const authResolver = require('./auth')
const journalResolver = require('./journal-entry')
const recordResolver = require('./record')

const rootResolver = {
  ...authResolver,
  ...journalResolver,
  ...recordResolver
}

module.exports = rootResolver
