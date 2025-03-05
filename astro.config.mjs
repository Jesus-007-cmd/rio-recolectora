// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
    
    publicDir: 'public', // Asegura que está permitiendo acceder a public/
    vite: {
      plugins: [],
      server: {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
        },
      },
    },
  });

  