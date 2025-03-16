import { defineConfig } from 'vite';
import {resolve} from "path";

export default defineConfig({
	// ссылка на папку проекта
  base: '/sputnik-template/', 
  build: {
		outDir: 'dist',
		rollupOptions: {
			input: {
				index: resolve(__dirname, "index.html"),
				template: resolve(__dirname, 'src/html/template.html'),
			}
		}
	}
});