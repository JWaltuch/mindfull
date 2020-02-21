//express imports
const express = require('express')
const bodyParser = require('body-parser')

//graphql imports
const graphqlHttp = require('express-graphql')
const graphqlSchema = require('./graphql/schema/index')
const graphqlResolvers = require('./graphql/resolvers/index')

//passport imports and set up imports
const session = require('express-session')
const passport = require('passport')
const SequelizeStore = require('connect-session-sequelize')(session.Store)
const db = require('./database/db')
const sessionStore = new SequelizeStore({db})

const app = express()

//to get session secret
if (process.env.NODE_ENV !== 'production') require('../secrets')

// passport registration
passport.serializeUser((user, done) => done(null, user.id))

passport.deserializeUser(async (id, done) => {
  try {
    const user = await db.models.user.findByPk(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

app.use(bodyParser.json())

// session middleware with passport
app.use(
  session({
    secret: process.env.SESSION_SECRET || 'secret failure',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
  })
)
app.use(passport.initialize())
app.use(passport.session())

module.exports = passport

app.use(
  '/graphql',
  graphqlHttp({
    //has graphql root schema
    schema: graphqlSchema,
    //holds an object with root resolvers
    rootValue: graphqlResolvers,
    graphiql: true
  })
)

db.sync()
app.listen(3000)
