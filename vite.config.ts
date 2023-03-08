import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import nodePolyfills from 'rollup-plugin-polyfill-node'
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target:'es2015',
    rollupOptions: {
      plugins: [nodePolyfills()]
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        NodeModulesPolyfillPlugin(),
      ],
    }
  },
})
