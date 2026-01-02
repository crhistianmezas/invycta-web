// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node'; // 👈 IMPORTANTE: El adaptador que instalamos

// https://astro.build/config
export default defineConfig({
  output: 'server', // 👈 VITAL: Activa el modo dinámico (SSR)
  adapter: node({
    mode: 'standalone',
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});