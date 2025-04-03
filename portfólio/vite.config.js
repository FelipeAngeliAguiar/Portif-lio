import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/Portif-lio/",  // Certifique-se de que esse nome está correto
});