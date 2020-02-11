const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
//buildSchema: built in function that takes a string to define the schema
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    //has graphql root schema
    schema: buildSchema('schema{query: mutation:}'),
    //holds an object with root resolvers
    rootValue: {},
  })
);

app.listen(3000);
