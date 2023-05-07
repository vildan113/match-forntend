import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			src: "/src",
			pages: "/src/pages",
			components: "/src/components",
			hooks: "/src/hooks",
			assets: "/src/assets",
		}
	}
})
