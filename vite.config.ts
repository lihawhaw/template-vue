import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ mode })=>{
  const env = loadEnv(mode, process.cwd(), '')

  console.log('VITE_APP_BASE', env.VITE_APP_BASE)
  return {
    base: env.VITE_APP_BASE,
    plugins: [vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.ts', '.json'],
    },
    build: {
      manifest: true,
    },
  }
})
