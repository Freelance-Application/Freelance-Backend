import { spawnSync } from 'child_process';

const migrationName = process.argv[2];

if (!migrationName) {
  console.error('❌ Debes proporcionar un nombre para la migración.');
  process.exit(1);
}

if (!/^[a-zA-Z0-9_-]+$/.test(migrationName)) {
  console.error('❌ Nombre de migración inválido.');
  process.exit(1);
}

console.log(`🚀 Ejecutando: npx prisma migrate dev --name ${migrationName}`);

const result = spawnSync(
  'npx',
  ['prisma', 'migrate', 'dev', '--name', migrationName],
  { stdio: 'inherit' },
);

if (result.error) {
  console.error('❌ Error ejecutando la migración:', result.error);
  process.exit(1);
}
