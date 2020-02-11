const Sequelize = require('sequelize')
const db = require('../db')

const Record = db.define('record', {
  hungry: {
    type: Sequelize.BOOLEAN
  },
  stressed: {
    type: Sequelize.BOOLEAN
  },
  bored: {
    type: Sequelize.BOOLEAN
  },
  sad: {
    type: Sequelize.BOOLEAN
  },
  userPlansToEat: {
    type: Sequelize.BOOLEAN
  },
  userAte: {
    type: Sequelize.BOOLEAN
  }
})

module.exports = Record
