// tailwind
/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: { 
            screens: {
                'xxs' : '100px',
                'xm' : '1366px'
            }
        }
    },
    plugins: []
};