/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,ts}'],
    darkMode: ['selector', '[data-mode="dark"]'],
    theme: {
        extend: {
            colors: {
                lime: {
                    100: 'var(--lime-100)',
                    200: 'var(--lime-200)',
                    300: 'var(--lime-300)',
                    400: 'var(--lime-400)',
                    500: 'var(--lime-500)',
                    600: 'var(--lime-600)',
                    700: 'var(--lime-700)',
                    800: 'var(--lime-800)',
                    900: 'var(--lime-900)',
                    1000: 'var(--lime-1000)'
                },
                red: {
                    100: 'var(--red-100)',
                    200: 'var(--red-200)',
                    300: 'var(--red-300)',
                    400: 'var(--red-400)',
                    500: 'var(--red-500)',
                    600: 'var(--red-600)',
                    700: 'var(--red-700)',
                    800: 'var(--red-800)',
                    900: 'var(--red-900)',
                    1000: 'var(--red-1000)'
                },
                orange: {
                    100: 'var(--orange-100)',
                    200: 'var(--orange-200)',
                    300: 'var(--orange-300)',
                    400: 'var(--orange-400)',
                    500: 'var(--orange-500)',
                    600: 'var(--orange-600)',
                    700: 'var(--orange-700)',
                    800: 'var(--orange-800)',
                    900: 'var(--orange-900)',
                    1000: 'var(--orange-1000)'
                },
                yellow: {
                    100: 'var(--yellow-100)',
                    200: 'var(--yellow-200)',
                    300: 'var(--yellow-300)',
                    400: 'var(--yellow-400)',
                    500: 'var(--yellow-500)',
                    600: 'var(--yellow-600)',
                    700: 'var(--yellow-700)',
                    800: 'var(--yellow-800)',
                    900: 'var(--yellow-900)',
                    1000: 'var(--yellow-1000)'
                },
                green: {
                    100: 'var(--green-100)',
                    200: 'var(--green-200)',
                    300: 'var(--green-300)',
                    400: 'var(--green-400)',
                    500: 'var(--green-500)',
                    600: 'var(--green-600)',
                    700: 'var(--green-700)',
                    800: 'var(--green-800)',
                    900: 'var(--green-900)',
                    1000: 'var(--green-1000)'
                },
                teal: {
                    100: 'var(--teal-100)',
                    200: 'var(--teal-200)',
                    300: 'var(--teal-300)',
                    400: 'var(--teal-400)',
                    500: 'var(--teal-500)',
                    600: 'var(--teal-600)',
                    700: 'var(--teal-700)',
                    800: 'var(--teal-800)',
                    900: 'var(--teal-900)',
                    1000: 'var(--teal-1000)'
                },
                blue: {
                    100: 'var(--blue-100)',
                    200: 'var(--blue-200)',
                    300: 'var(--blue-300)',
                    400: 'var(--blue-400)',
                    500: 'var(--blue-500)',
                    600: 'var(--blue-600)',
                    700: 'var(--blue-700)',
                    800: 'var(--blue-800)',
                    900: 'var(--blue-900)',
                    1000: 'var(--blue-1000)'
                },
                purple: {
                    100: 'var(--purple-100)',
                    200: 'var(--purple-200)',
                    300: 'var(--purple-300)',
                    400: 'var(--purple-400)',
                    500: 'var(--purple-500)',
                    600: 'var(--purple-600)',
                    700: 'var(--purple-700)',
                    800: 'var(--purple-800)',
                    900: 'var(--purple-900)',
                    1000: 'var(--purple-1000)'
                },
                magenta: {
                    100: 'var(--magenta-100)',
                    200: 'var(--magenta-200)',
                    300: 'var(--magenta-300)',
                    400: 'var(--magenta-400)',
                    500: 'var(--magenta-500)',
                    600: 'var(--magenta-600)',
                    700: 'var(--magenta-700)',
                    800: 'var(--magenta-800)',
                    900: 'var(--magenta-900)',
                    1000: 'var(--magenta-1000)'
                },
                neutral: {
                    0: 'var(--neutral-0)',
                    100: 'var(--neutral-100)',
                    200: 'var(--neutral-200)',
                    300: 'var(--neutral-300)',
                    400: 'var(--neutral-400)',
                    500: 'var(--neutral-500)',
                    600: 'var(--neutral-600)',
                    700: 'var(--neutral-700)',
                    800: 'var(--neutral-800)',
                    900: 'var(--neutral-900)',
                    1000: 'var(--neutral-1000)',
                    1100: 'var(--neutral-1100)'
                }
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
