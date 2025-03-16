import { execSync } from 'child_process';

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('❌ Debes proporcionar un nombre para la migración.');
  process.exit(1);
}

const command = `npx prisma migrate dev --name ${migrationName}`;

console.log(`🚀 Ejecutando: ${command}`);
execSync(command, { stdio: 'inherit' });
