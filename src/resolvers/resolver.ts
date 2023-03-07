import {UserController} from "../controllers/user.controller";

let userController = new UserController()
export const resolvers = {
    Query : {
        getUserBYId:userController.getUserBYId,
        getAllUser:userController.getAllUser,
    }
    ,
    Mutation : {
        createUser:userController.createUser,
        updateUser:userController.updateUser,
        deleteUser:userController.deleteUser,
    
    }
}