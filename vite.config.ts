import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
	server: { open: true, strictPort: true, port: 3000 },
	define: { global: 'window' },
	resolve: {
		alias: [
			{ find: '@app', replacement: resolve(__dirname, '/src/app') },
			{ find: '@pages', replacement: resolve(__dirname, '/src/pages') },
			{ find: '@shared', replacement: resolve(__dirname, '/src/shared') },
			{ find: '@widgets', replacement: resolve(__dirname, '/src/widgets') },
			{ find: '@entities', replacement: resolve(__dirname, '/src/entities') },
		],
	},
	plugins: [react()],
})
