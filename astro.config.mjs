import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless'; // 👈 CAMBIO CRÍTICO: Usa el adaptador de Vercel

export default defineConfig({
  output: 'server', // 👈 VITAL para que Prisma funcione en tiempo real
  adapter: vercel(), // 👈 Esto le dice a Vercel exactamente cómo servir la web
  vite: {
    plugins: [tailwindcss()]
  }
});