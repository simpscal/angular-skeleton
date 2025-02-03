/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}'],
    theme: {
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                success: 'var(--success-color)',
                danger: 'var(--danger-color)',
                warning: 'var(--warning-color)',
                info: 'var(--info-color)',
                dark: 'var(--dark-color)',
                light: 'var(--light-color)'
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
