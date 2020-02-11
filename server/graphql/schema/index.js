//buildSchema: built in function that takes a string to define the schema
const {buildSchema} = require('graphql')
// const User = require('../../database/db')

module.exports = buildSchema(`
        type User {
            _id: ID!
            username: String!
            email: String!
            password: String
        }

        input UserInput {
            username: String!
            email: String!
            password: String!
        }

        type RootQuery = {
            users: [User!]!
        }

        type RootMutation = {
            signUp(userInputL UserInput): User
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }`)
