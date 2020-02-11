//buildSchema: built in function that takes a string to define the schema
const {buildSchema} = require('graphql')

module.exports = buildSchema(`
        type User {
            id: Int!
            username: String!
            email: String!
            password: String
        }

        type Record {
            hungry: Boolean!
            stressed: Boolean!
            bored: Boolean!
            sad: Boolean!
            userPlansToEat: Boolean!
            userAte: Boolean
        }

        type JournalEntry {
            entry: Int!
            emotion: String!
            date: String!
        }

        input UserInput {
            username: String!
            email: String!
            password: String!
        }

        type RootQuery {
            users: [User!]!
        }

        type RootMutation {
            signUp(userInput: UserInput): User
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }`)
