import { ApolloServer } from "@apollo/server";

const createApolloServer = async () => {
  const gqlServer = new ApolloServer({
    typeDefs: `#graphql
            type Query{
                hello: String
            }
            type Mutation{
                hi:String
            }
        `,
    resolvers: {
      Query: {},
      Mutation: {},
    },
  });
  await gqlServer.start();
  return gqlServer;
};

export default createApolloServer;
