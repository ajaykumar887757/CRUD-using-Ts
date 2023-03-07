"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// import { createConnection } from "typeorm";
const express_1 = __importDefault(require("express"));
const promises_1 = require("fs/promises");
const apollo_server_express_1 = require("apollo-server-express");
const resolver_1 = require("../src/resolvers/resolver");
const app = (0, express_1.default)();
const startServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const typeDefs = yield (yield (0, promises_1.readFile)("/home/ajay/Documents/Oodles_projects/VN project/CRUD_1/schema.graphql")).toString("utf-8");
    const server = new apollo_server_express_1.ApolloServer({ typeDefs, resolvers: resolver_1.resolvers });
    yield server.start();
    console.log("Server started and applied middleware");
    server.applyMiddleware({ app });
});
startServer();
const misc_config = {
    PORT: 4000
};
app.listen(misc_config.PORT, () => {
    console.log(`Server listening at port : ${misc_config.PORT}`);
});
