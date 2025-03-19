// @ts-check
import { defineConfig } from 'astro/config';

//import react from '@astrojs/react';
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

export default defineConfig({
  // integrations: [react()],
  // Asegura que está permitiendo acceder a public/
  publicDir: 'public',

  vite: {
    plugins: [tailwindcss()],
    server: {
      headers: {
        "Content-Type": "text/html; charset=UTF-8",
      },
    },
  },

  integrations: [react()]
});