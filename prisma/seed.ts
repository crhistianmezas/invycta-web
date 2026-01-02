import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  console.log('🚀 Poblando todas las secciones del CMS...');

  // 1. HERO (Lo que ya tienes, pero asegurando campos)
  await prisma.webContent.upsert({
    where: { id: 'hero-1' },
    update: {},
    create: {
      id: 'hero-1',
      sectionType: 'HERO',
      title: 'INVYCTA RETAIL',
      subtitle: 'Equipamiento Comercial y Soluciones para Retail',
      description: 'Expertos en la fabricación e instalación de góndolas, racks y checkouts.',
      imageUrl: '/images/hero-bg.jpg', // Asegúrate de que exista en public/images/
      ctaText: 'COTIZA AQUÍ',
      ctaLink: '#contacto',
    },
  });

  // 2. SECTORES (Para la sección "Nuestras Soluciones")
  const sectores = [
    { id: 'sec-1', title: 'Supermercados', img: '/images/super.jpg' },
    { id: 'sec-2', title: 'Almacenes', img: '/images/almacen.jpg' },
    { id: 'sec-3', title: 'Tiendas de Conveniencia', img: '/images/tienda.jpg' },
  ];

  for (const s of sectores) {
    await prisma.webContent.upsert({
      where: { id: s.id },
      update: {},
      create: {
        id: s.id,
        sectionType: 'SECTOR_CARD',
        title: s.title,
        imageUrl: s.img,
        ctaText: 'Ver detalles',
      },
    });
  }

  // 3. PRODUCTOS (Para la sección de filas alternadas)
  await prisma.webContent.upsert({
    where: { id: 'prod-1' },
    update: {},
    create: {
      id: 'prod-1',
      sectionType: 'PRODUCT_ROW',
      title: 'Góndolas Metálicas Premium',
      description: 'Nuestras góndolas ofrecen la mayor resistencia y versatilidad del mercado peruano.',
      imageUrl: '/images/gondola.jpg',
      ctaText: 'Ver Catálogo',
    },
  });

  console.log('✅ Web completamente poblada.');
}

main().catch((e) => { console.error(e); process.exit(1); }).finally(async () => { await prisma.$disconnect(); });