import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr({
			svgrOptions: {
				svgProps: { role: "img" },
				expandProps: "start",
				icon: "1em"
			}
		})
	],
	resolve: {
		alias: {
			src: "/src",
			pages: "/src/pages",
			components: "/src/components",
			hooks: "/src/hooks",
			assets: "/src/assets",
			store: "/src/store",
			config: "/src/config"
		}
	},
	css: {
		modules: {
			generateScopedName: "[local]___[hash:base26:4]"
		}
	}
})
