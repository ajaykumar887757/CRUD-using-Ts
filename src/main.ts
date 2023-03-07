import "reflect-metadata";
// import { createConnection } from "typeorm";
import express from "express";
import {readFile } from "fs/promises";
import { ApolloServer } from "apollo-server-express";
import {resolvers} from "../src/resolvers/resolver";
const app = express();

const startServer = async () => {
  const typeDefs = await (await readFile("/home/ajay/Documents/Oodles_projects/VN project/CRUD_1/schema.graphql")).toString("utf-8");
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  console.log("Server started and applied middleware");
  server.applyMiddleware({ app });
};
startServer();
const misc_config = {
  PORT :4000
}

app.listen(misc_config.PORT,()=>{
  console.log(`Server listening at port : ${misc_config.PORT}`)
})