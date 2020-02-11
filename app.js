const express = require('express')
const bodyParser = require('body-parser')
const graphqlHttp = require('express-graphql')
const graphqlSchema = require('./graphql/schema/index')

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

app.listen(3000)
