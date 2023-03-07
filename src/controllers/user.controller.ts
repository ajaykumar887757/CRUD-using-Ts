import httpStatus from "http-status"
const controller = "[Posts_Controller]";
import { PrismaClient ,User } from '@prisma/client'
  const prisma = new PrismaClient()

export class UserController{
    async createUser(_:any , args : any){
        try{
            let {name , email} = args
            console.log("name");
            const user= await prisma.user.create ({data:{
                name:name,
                email:email
            }})
            return user
        }catch(err:any){
            console.log(err)
        }
    };
    async updateUser(_:any , args : any){
        try{
            let {id,name , email} = args
            console.log("name");
            const UpdatedUser= await prisma.user.update({
                where: { id },
                data: {
                  name: name,
                  email: email,
                },
              });
            return UpdatedUser
        }catch(err:any){
            console.log(err)
        }
    };
    async deleteUser(_:any , args : any){
        try{
            let {id} = args
            console.log("name");
            const DeleteUser= await prisma.user.delete({
                where: { id }
              });
            return DeleteUser
        }catch(err:any){
            console.log(err)
        }
    };
    async getUserBYId(_:any , args : any){
        try{
            let {id} = args
            const getUserId= await prisma.user.findFirst({
                where: { id }
              });
            return getUserId
        }catch(err:any){
            console.log(err)
        }
    };
    async getAllUser(_:any , args : any){
        try{
            let { page = 1, limit = 3 ,search=null} = args
            page=parseInt(page)
            interface PageInfo {
                next?: {
                  page: number;
                  limit: number;
                },
                previous?: {
                  page: number;
                  limit: number;
                },
              }

            // let  { page = 1, limit = 10 } =req.body
            page = parseInt(page);
            limit = parseInt(limit);
            if (page < 1) {
              page = 1;
            }
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            let count = await prisma.user.count()
            let maxPage = Math.ceil(count / limit);
            const pageInfo: PageInfo = {};
            if (endIndex < count) {
                pageInfo.next = {
                  page: page + 1,
                  limit: limit,
                };
              }
            
              if (startIndex > 0) {
                pageInfo.previous = {
                  page: page - 1,
                  limit: limit,
                };
              }
            const skip = (page - 1) * limit;

            if (search !==null){
                const getUser= await prisma.user.findMany({
                    where:{
                        name:search
                    },
                    skip: skip,
                    take: limit,
                    orderBy: {
                        name: 'asc',
                      }
                  });
                  return {pageInfo:pageInfo,users:getUser}
            }
            const getUser= await prisma.user.findMany({
                skip: skip,
                take: limit,
                orderBy: {
                    name: 'asc',
                  }
              });
            return {pageInfo:pageInfo,users:getUser}
        }catch(err:any){
            console.log(err)
        }
    };

}