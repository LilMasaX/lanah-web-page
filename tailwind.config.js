/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'var(--orange-soft)', // #E76F51 → color principal (botones, acentos)
                    light: 'var(--peach-light)',   // #F6B78D → tonos suaves
                    dark: '#D3543B',               // versión más oscura del naranja
                },
                secondary: {
                    DEFAULT: '#FFD166',            // amarillo cálido
                    light: '#FFE29A',
                    dark: '#E6B955',
                },
                accent: {
                    DEFAULT: 'var(--coral)',       // #6767f2 → un contraste bonito
                },
                neutral: {
                    DEFAULT: 'var(--brown-light)', // #DAD4CD → texto / bordes
                    white: 'var(--white)',         // #FDFDFD → fondos claros
                },
            },
        },
    },
    plugins: [],
}
