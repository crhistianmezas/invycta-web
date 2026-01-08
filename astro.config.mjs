import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  // ESTA LÍNEA ES LA CLAVE. Si falta, no hay estilos.
  integrations: [tailwind()],
});