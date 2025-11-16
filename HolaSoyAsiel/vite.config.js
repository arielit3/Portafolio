import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

// Vite config que incluye el plugin de SvelteKit. Esto permite ejecutar
// `vite dev` y que el plugin gestione las rutas de SvelteKit (src/routes).
export default defineConfig({
  plugins: [sveltekit()]
});
