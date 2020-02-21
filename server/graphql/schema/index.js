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

        type JournalInput {
            entry: Int!
            emotion: String!
        }

        type RootQuery {
            users: [User!]!
            me: User
        }

        type RootMutation {
            signUp(userInput: UserInput): User
        }

        schema{
            query: RootQuery
            mutation: RootMutation
        }`)

//FUTURE ROUTE MUTATIONS
// signUp(userInput: UserInput): User
// login(userInput: {email: String!, password: String!}): User
// getMe(id: Int): User
// logout(id: Int): User
// createRecord(recordInput: RecordInput): Record
// createJournalEntry(journalInput: JournalInput): Journal

//FUTURE ROUTE QUERIES
// records: [Record!]!
// journalEntries: [JournalEntry!]!
