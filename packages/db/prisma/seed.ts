import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.user.upsert({
    where: { number: "111111" },
    update: {},
    create: {
      email: "aaryan@gmail.com",
      name: "Alice Kumar",
      number: "1111111111",
      password: await bcrypt.hash("abcdefghij",10),
      Balance: {
        create: {
          amount: 12312,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          token: "token___6",
          provider: "HDFC Bank",
          amount: 12334,
        },
      },
    },
  });

  const bob = await prisma.user.upsert({
    where: { number: "2222222222" },
    update: {},
    create: {
      email: "anubhav@gmail.com",
      name: "Bob Kumar",
      number: "2222222222",
      password: await bcrypt.hash("abcdefghijkl",10),
      Balance: {
        create: {
          amount: 58586,
          locked: 0,
        },
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          token: "token___7",
          provider: "Axis Bank",
          amount: 68857,
        },
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
