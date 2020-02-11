//buildSchema: built in function that takes a string to define the schema
const {buildSchema} = require('graphql')

module.exports = buildSchema(`
        type RootQuery = {

        }

        type RootMutation = {

        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }`)
