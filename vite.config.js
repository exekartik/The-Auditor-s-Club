import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        terms: resolve(__dirname, 'terms-and-conditions.html'),
        privacy: resolve(__dirname, 'privacy-policy.html'),
        refund: resolve(__dirname, 'refund-policy.html'),
        return: resolve(__dirname, 'return-policy.html'),
        shipping: resolve(__dirname, 'shipping-policy.html'),
      },
    },
  },
});
