"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const user_controller_1 = require("../controllers/user.controller");
let userController = new user_controller_1.UserController();
exports.resolvers = {
    Query: {
    // getUserById:userController.getPostsById,
    // getAllPosts:userController.getAllPosts,
    },
    Mutation: {
        //Mongo DB : [user Controller]
        // createUser:userController.createUser,
        // updateUser:userController.updateUser,
        // deleteUser:userController.deleteUser,
        // Postgres : [Post Controller]
        createUser: userController.createUser,
        // updatePost:postsController.updatePost,
        // deletePost:postsController.deletePost,
    }
};
