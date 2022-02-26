module.exports = {
    purge: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            heading: ['MaisonNeueMedium', 'sans-serif'],
            sans: ['MaisonNeueBook', 'sans-serif'],
            light: ['MaisonNeueLight', 'sans-serif']
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}