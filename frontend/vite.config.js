import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';

export default defineConfig({
  root: '.',  // Définit "public" comme racine pour le serveur de développement
  base: '/',         // Définit la base des chemins relatifs

  build: {
    outDir: resolve(__dirname, '../dist'), // Changez ici pour indiquer le bon dossier de sortie
    emptyOutDir: true,                     // Vide le dossier de sortie avant chaque build
    rollupOptions: {
      input: resolve(__dirname, 'public/index.html'), // Spécifie le chemin absolu vers index.html
    },
  },

  server: {
    port: 5173,        // Définit le port du serveur de développement
    open: true,        // Ouvre le navigateur automatiquement
  },
});
