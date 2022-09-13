import { defineConfig, splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig(({ command }) => {
  const base = command === 'build' ? 'https://qiankun-1256651264.cos-website.ap-shanghai.myqcloud.com': '/'

  return {
    base,
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
