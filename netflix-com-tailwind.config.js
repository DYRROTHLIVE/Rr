/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
    colors: {
        primary: {
            '50': 'hsl(357, 92%, 97%)',
            '100': 'hsl(357, 92%, 94%)',
            '200': 'hsl(357, 92%, 86%)',
            '300': 'hsl(357, 92%, 76%)',
            '400': 'hsl(357, 92%, 64%)',
            '500': 'hsl(357, 92%, 50%)',
            '600': 'hsl(357, 92%, 40%)',
            '700': 'hsl(357, 92%, 32%)',
            '800': 'hsl(357, 92%, 24%)',
            '900': 'hsl(357, 92%, 16%)',
            '950': 'hsl(357, 92%, 10%)',
            DEFAULT: '#e50914'
        },
        secondary: {
            '50': 'hsl(222, 54%, 97%)',
            '100': 'hsl(222, 54%, 94%)',
            '200': 'hsl(222, 54%, 86%)',
            '300': 'hsl(222, 54%, 76%)',
            '400': 'hsl(222, 54%, 64%)',
            '500': 'hsl(222, 54%, 50%)',
            '600': 'hsl(222, 54%, 40%)',
            '700': 'hsl(222, 54%, 32%)',
            '800': 'hsl(222, 54%, 24%)',
            '900': 'hsl(222, 54%, 16%)',
            '950': 'hsl(222, 54%, 10%)',
            DEFAULT: '#3860be'
        },
        'neutral-50': '#ffffff',
        'neutral-100': '#000000',
        'neutral-200': '#333333',
        'neutral-300': '#232323',
        'neutral-400': '#414141',
        'neutral-500': '#555555',
        'neutral-600': '#2d2d2d',
        'neutral-700': '#f4f4f4',
        'neutral-800': '#161616',
        'neutral-900': '#808080',
        background: '#000000',
        foreground: '#ffffff'
    },
    fontFamily: {
        sans: [
            'Netflix Sans',
            'sans-serif'
        ]
    },
    fontSize: {
        '0': [
            '0px',
            {
                lineHeight: 'normal'
            }
        ],
        '10': [
            '10px',
            {
                lineHeight: '16px'
            }
        ],
        '12': [
            '12px',
            {
                lineHeight: '14px'
            }
        ],
        '13': [
            '13px',
            {
                lineHeight: '19.5px'
            }
        ],
        '14': [
            '14px',
            {
                lineHeight: '14px'
            }
        ],
        '16': [
            '16px',
            {
                lineHeight: 'normal'
            }
        ],
        '20': [
            '20px',
            {
                lineHeight: 'normal'
            }
        ],
        '24': [
            '24px',
            {
                lineHeight: '24px'
            }
        ],
        '56': [
            '56px',
            {
                lineHeight: '70px'
            }
        ],
        '100': [
            '100px',
            {
                lineHeight: 'normal'
            }
        ],
        '21.92': [
            '21.92px',
            {
                lineHeight: '26.304px'
            }
        ],
        '14.4': [
            '14.4px',
            {
                lineHeight: '38px',
                letterSpacing: '0.144px'
            }
        ],
        '13.6': [
            '13.6px',
            {
                lineHeight: '27.2px'
            }
        ],
        '13.008': [
            '13.008px',
            {
                lineHeight: 'normal'
            }
        ],
        '12.8': [
            '12.8px',
            {
                lineHeight: 'normal'
            }
        ]
    },
    spacing: {
        '32': '64px',
        '48': '96px',
        '50': '100px',
        '64': '128px',
        '74': '148px',
        '157': '314px',
        '1px': '1px'
    },
    borderRadius: {
        xs: '2px',
        md: '8px',
        lg: '16px',
        xl: '20px',
        full: '50px'
    },
    boxShadow: {
        xs: 'rgb(128, 128, 128) 0px 0px 5px 0px',
        sm: 'rgb(199, 197, 199) -3px -3px 5px -2px',
        md: 'rgba(0, 0, 0, 0) 0px 2px 4px 0px, rgba(50, 50, 93, 0.1) 0px 7px 14px 0px'
    },
    screens: {
        '400px': '400px',
        sm: '426px',
        md: '769px',
        '890px': '890px',
        '897px': '897px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1600px',
        '1920px': '1920px',
        '2560px': '2560px'
    },
    transitionDuration: {
        '100': '0.1s',
        '200': '0.2s',
        '250': '0.25s',
        '300': '0.3s',
        '400': '0.4s'
    },
    transitionTimingFunction: {
        custom: 'cubic-bezier(0.4, 0, 0.68, 0.06)',
        default: 'ease'
    },
    container: {
        center: true,
        padding: '0px'
    },
    maxWidth: {
        container: '100%'
    }
},
  },
};
