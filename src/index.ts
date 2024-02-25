import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { expressMiddleware } from "@apollo/server/express4";
import createApolloServer from "./graphql";
config();

const init = async () => {
  const app = express();
  const port = process.env.PORT;
  app.use(
    cors({
      origin: process.env.ORIGIN,
    })
  );
  app.use(express.json());

  app.use("/api/graphql", expressMiddleware(await createApolloServer()));
  app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
  });
};

init();
