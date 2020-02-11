const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const graphqlSchema = require('./graphql/schema/index')
const db = require('./database/db')

const app = express()

app.use(bodyParser.json())

app.use(
  '/graphql',
  graphqlHttp({
    //has graphql root schema
    schema: graphqlSchema,
    //holds an object with root resolvers
    rootValue: {}
  })
)

db.sync()
app.listen(3000)
