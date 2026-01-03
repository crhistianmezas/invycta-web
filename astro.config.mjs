import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // 👈 El adaptador vital
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server', // 👈 OBLIGATORIO: Le dice a Astro "No hagas una web estática, haz una app real"
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ['@prisma/client'] // Evita errores de Prisma en producción
    }
  }
});