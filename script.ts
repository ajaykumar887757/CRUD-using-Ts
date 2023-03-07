import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// console.log("Hello World")
async function main() {

    // const user= await prisma.user.create ({data:{
    //     name:"Arun",
    //     email:"arun@oodles.io"
    // }})

    const user =await prisma.user.findMany()

    console.log(user)
}

main().catch(e=>{
    console.error(e.message)
}).finally(async ()=>{
    await prisma.$disconnect()
})