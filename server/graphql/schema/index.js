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
            id: Int!
            hungry: Boolean!
            stressed: Boolean!
            bored: Boolean!
            sad: Boolean!
            userPlansToEat: Boolean!
            userAte: Boolean
        }

        type JournalEntry {
            id: Int!
            entry: Int!
            emotion: String!
        }

        input UserInput {
            username: String!
            email: String!
            password: String!
        }

        input RecordInput {
            hungry: Boolean!
            stressed: Boolean!
            bored: Boolean!
            sad: Boolean!
            userPlansToEat: Boolean!
            userAte: Boolean
        }

        input JournalInput {
            entry: Int!
            emotion: String!
        }

        type AuthPayload {
            userId: Int!
            token: String!
            tokenExpiration: Int!
        }

        type RootQuery {
            records: [Record!]!
            journalEntries: [JournalEntry!]!
            login(email: String!, password: String!): AuthPayload!
            getMe(id: Int): User
        }

        type RootMutation {
            signUp(userInput: UserInput): User
            createRecord(recordInput: RecordInput): Record
            createJournalEntry(journalInput: JournalInput): JournalEntry
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }`)

//logout(id: Int): User
