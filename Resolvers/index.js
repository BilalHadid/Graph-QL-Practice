let crypto = require("crypto");
let localData = {};
const resolvers = {
  Query: {
    getMessage: () => {
      return "Hello world resolver";
    },
    getName: () => {
      return "Bilal Hadid";
    },
    getAllmessaga: () => {
      return [
        { message: "test", id: "2356" },
        { message: "test1", id: "2358" },
      ];
    },
  },
  Mutation: {
    createMessage: (_, { input }) => {
      let id = crypto.randomBytes(1).toString("hex");
      console.log(`id`, id);
      localData[id] = { id, ...input.message };
      return { id, ...input };
    },
  },
};

module.exports = resolvers;
