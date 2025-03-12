// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    
    publicDir: 'public', // Asegura que está permitiendo acceder a public/
    vite: {
      plugins: [tailwindcss()],
      server: {
        headers: {
          "Content-Type": "text/html; charset=UTF-8",
        },
      },
    },
  });