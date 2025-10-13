import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Optimize chunk size
    cssCodeSplit: true,
    reportCompressedSize: false, // Speeds up build
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': [
            '@/components/ui/accordion', 
            '@/components/ui/alert-dialog', 
            '@/components/ui/alert',
            '@/components/ui/button',
            '@/components/ui/card',
            '@/components/ui/tabs'
          ]
        }
      }
    }
  },
  // Enable faster development server
  server: {
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: false
    }
  }
});