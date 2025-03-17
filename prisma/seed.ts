import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeding...');

  // 🔹 Crea skills
  const skills = await prisma.skill.createManyAndReturn({
    data: [
      {
        name: '',
        description: '',
      },
    ],
  });

  console.log('✅ Skills creados:', skills);

  console.log('🌱 Seeding finalizado!');
}

async function seed() {
  try {
    await main();
  } catch (error) {
    console.error('❌ Error en el seeding:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

void seed();
