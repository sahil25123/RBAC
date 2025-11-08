import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient ({
    log  : ["query" , "info" , "warn" , "error"]
})

prisma.$connect()
.then(() => console.log("Prisma Connected Successfully"))
.catch((err =>{
    console.error("Prisma connection failed" , err)
    process.exit(1)
}))

module.exports = prisma;
