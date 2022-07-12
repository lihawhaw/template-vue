import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  console.log('VITE_APP_BASE', env.VITE_APP_BASE)
  return {
    base: env.VITE_APP_BASE,
    plugins: [vue(), WindiCSS(), splitVendorChunkPlugin],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.json'],
    },
    build: {
      manifest: true,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue'],
            home: ['./src/pages/home/index.vue'],
            about: ['./src/pages/about/index.vue'],
            todo: ['./src/pages/todo/index.vue'],
          },
        },
      },
    },
  }
})
