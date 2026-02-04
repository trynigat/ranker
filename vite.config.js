import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            registerType: 'autoUpdate',
            manifest: {
                name: 'Game Ranking App',
                short_name: 'GameRank',
                display: 'standalone', // To kluczowe dla efektu "apki"
                background_color: '#000000',
                theme_color: '#000000',
                icons: [
                    {
                        src: 'pwa-192x192.png', // Pamiętaj dodać te pliki do /public
                        sizes: '192x192',
                        type: 'image/png'
                    }
                ]
            }
        })
    ]
})