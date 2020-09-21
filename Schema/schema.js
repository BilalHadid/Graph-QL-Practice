const { gql } = require("apollo-server");

const typeDefs = gql`
  type createMessageType {
    message: String
  }
  type Mutation {
    createMessage: String
  }
  type Query {
    getMessage: String
    getName: String
  }
`;

module.exports = typeDefs;
