import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.jsx'],
            refresh: true,
        }),
    ],
    server: {
        host:  '192.168.73.249', // Allow access from the network
       port: 5173,     // Default Vite port or any port you want
        hmr: {
            host: '192.168.73.249',
            port: 5173      // Match the port used by the Vite server
        },
    }
});
