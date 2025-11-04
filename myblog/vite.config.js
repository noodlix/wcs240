import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Do not import vueDevTools at the top — import only when needed

export default defineConfig(async ({ mode }) => {
  const plugins = [vue()]

  if (mode === 'development') {
    // Lazy import vueDevTools only in development
    const { default: vueDevTools } = await import('vite-plugin-vue-devtools')
    plugins.push(vueDevTools())
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
    },
  }
})
