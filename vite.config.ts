import path from 'path';
import devServer from '@hono/vite-dev-server';
import {defineConfig} from 'vite';
import build from '@hono/vite-build/bun'
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => {
    const globalConfig = {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
    };

    if (mode === 'bundle') {
        return {
            ...globalConfig,
            build: {
                rollupOptions: {
                    input: ['./src/bundle.ts', './src/style.css'],
                    output: {
                        entryFileNames: 'static/bundle.js',
                        assetFileNames: 'static/[name].[ext]',
                    },
                },
            },
            plugins: [tailwindcss()]
        };
    } else {
        return {
            ...globalConfig,
            plugins: [
                tailwindcss(),
                build({
                    entry: 'src/index.ts',
                }),
                devServer({
                    entry: 'src/index.ts',
                }),
            ],
        };
    }
});