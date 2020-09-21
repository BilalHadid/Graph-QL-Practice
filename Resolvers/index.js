const resolvers = {
  Query: {
    getMessage: () => {
      return "Hello world resolver";
    },
    getName: () => {
      return "Bilal Hadid";
    },
  },
  Mutation: {},
};

module.exports = resolvers;
