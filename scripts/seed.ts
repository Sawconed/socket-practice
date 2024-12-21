import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

  await prisma.message.deleteMany({});
  await prisma.user.deleteMany({});


  await prisma.user.createMany({
    data: [
      {
        id: "67668a3b6d77501d77b21c88",
        username: "JiaBao",
        password: "123123",
      },
      {
        id: "67668a3b6d77501d77b21c89",
        username: "Sawconed",
        password: "123456",
      }
    ]
  })

  await prisma.message.createMany({
    data: [
      {
        body: "Hello",
        userId: "67668a3b6d77501d77b21c88"
      },
      {
        body: "Hi~~~",
        userId: "67668a3b6d77501d77b21c89"
      }
    ]
  })
}

main()
