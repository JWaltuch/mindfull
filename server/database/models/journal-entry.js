const Sequelize = require('sequelize')
const db = require('../db')

const JournalEntry = db.define('journalentry', {
  entry: {
    type: Sequelize.TEXT
  },
  emotion: {
    type: Sequelize.STRING,
    values: ['hungry', 'bored', 'stressed', 'sad']
  },
  date: {
    type: Sequelize.DATE
  }
})

module.exports = JournalEntry
