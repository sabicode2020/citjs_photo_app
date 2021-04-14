// eslint-disable-next-line @typescript-eslint/no-var-requires
const { PrismaClient } = require('@prisma/client');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const faker = require('faker');

const prisma = new PrismaClient();

const galleries = Array.from(Array(10).keys()).map((i) => ({
  name: faker.lorem.words(4),
  description: faker.lorem.sentence(),
}));

async function main() {
  await prisma.galery.createMany({
    data: galleries,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export {};
