module.exports = {
    content: ['./apps/**/*.{html,js,ts}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {
        extend: {
            spacing: {
                sm: '0.5rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '2rem'
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
