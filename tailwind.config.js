/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}', './stories/**/*.{html,js,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#3B71CA',
                secondary: '#9FA6B2',
                success: '#14A44D',
                danger: '#DC4C64',
                warning: '#E4A11B',
                info: '#54B4D3',
                dark: '#332D2D',
                light: '#FBFBFB'
            },
            fontFamily: {
                primary: ['"Inter Regular"', '"sans-serif"'],
                'primary-medium': ['"Inter Medium"', '"sans-serif"'],
                'primary-semibold': ['"Inter Semibold"', '"sans-serif"'],

                secondary: [],
                'secondary-medium': [],
                'secondary-semibold': []
            },
            screens: {}
        }
    }
};
