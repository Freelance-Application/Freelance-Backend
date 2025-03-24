import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seeding...');

  // 🔹 Crea skills
  const skills = await prisma.skill.createManyAndReturn({
    data: [
      {
        name: 'Asesoría en Tesis',
        description:
          'Guía en metodología, estructura y redacción de tesis universitarias.',
      },
      {
        name: 'Clases de Matemáticas',
        description:
          'Tutoría en álgebra, cálculo, estadística y otros temas matemáticos.',
      },
      {
        name: 'Clases de Programación',
        description:
          'Enseñanza de Java, Python, JavaScript y otros lenguajes de programación.',
      },
      {
        name: 'Edición de Videos',
        description:
          'Corte, montaje y mejora de videos para presentaciones o redes sociales.',
      },
      {
        name: 'Diseño de Presentaciones',
        description:
          'Creación de diapositivas llamativas para exposiciones y trabajos.',
      },
      {
        name: 'Traducción de Textos',
        description: 'Traducción de inglés, francés, alemán y otros idiomas.',
      },
      {
        name: 'Corrección de Textos',
        description:
          'Revisión de ortografía, gramática y coherencia en documentos.',
      },
      {
        name: 'Redacción de Ensayos',
        description: 'Elaboración de textos argumentativos y académicos.',
      },
      {
        name: 'Desarrollo Web Básico',
        description:
          'Creación de páginas web sencillas con HTML, CSS y JavaScript.',
      },
      {
        name: 'Soporte en Excel y Google Sheets',
        description:
          'Automatización de hojas de cálculo y manejo de funciones avanzadas.',
      },
      {
        name: 'Soporte Técnico Básico',
        description:
          'Solución de problemas en computadoras y asesoría en software.',
      },
      {
        name: 'Community Management',
        description:
          'Manejo de redes sociales y estrategias de crecimiento digital.',
      },
      {
        name: 'Modelado en AutoCAD y Revit',
        description:
          'Creación de planos y modelado 3D para arquitectura o ingeniería.',
      },
      {
        name: 'Análisis de Datos en SPSS y R',
        description:
          'Análisis estadístico de datos para trabajos académicos y proyectos.',
      },
      {
        name: 'Ilustración y Dibujo Digital',
        description: 'Creación de ilustraciones y gráficos digitales.',
      },
      {
        name: 'Otros',
        description:
          'Habilidades que no encajan en ninguna de las categorías anteriores.',
      },
    ],
  });

  console.log('✅ Skills creados:', skills);

  // 🔹 Crea Categorias
  const categories = await prisma.category.createManyAndReturn({
    data: [
      {
        name: 'Asesoría Académica',
        description:
          'Apoyo en tareas, exámenes, proyectos y tesis en diversas materias.',
      },
      {
        name: 'Clases y Tutorías',
        description:
          'Enseñanza personalizada en matemáticas, programación, idiomas y más.',
      },
      {
        name: 'Diseño y Edición',
        description:
          'Creación de presentaciones, diseño gráfico, edición de imágenes y videos.',
      },
      {
        name: 'Desarrollo de Software',
        description: 'Programación, desarrollo web y creación de aplicaciones.',
      },
      {
        name: 'Traducción e Idiomas',
        description:
          'Traducción de documentos y clases de idiomas para estudiantes.',
      },
      {
        name: 'Redacción y Corrección',
        description:
          'Corrección de textos, redacción de ensayos y mejora de ortografía y gramática.',
      },
      {
        name: 'Soporte Tecnológico',
        description:
          'Instalación de software, reparación de computadoras y asesoría en herramientas digitales.',
      },
      {
        name: 'Marketing y Publicidad',
        description:
          'Gestión de redes sociales, estrategias de publicidad y creación de contenido.',
      },
      {
        name: 'Modelado y Planos',
        description:
          'Diseño de planos, modelado 3D y creación de renders para arquitectura o ingeniería.',
      },
      {
        name: 'Otros',
        description:
          'Servicios que no encajan en ninguna de las categorías anteriores.',
      },
    ],
  });

  console.log('✅ Categorias creadas:', categories);

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
