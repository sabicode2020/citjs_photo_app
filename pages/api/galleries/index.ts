import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (req, res) => {
  async function main() {
    const galleries = await prisma.galery.findMany({
      orderBy: [{ name: 'asc' }],
    });
    return res.status(200).json(galleries);
  }

  main()
    .catch((e) => {
      throw e;
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
};
