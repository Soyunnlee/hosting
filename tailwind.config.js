export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	darkMode: 'class',
	theme: {
		extend: {
			keyframes: {
				bounce: {
					'0%, 100%': { transform: 'translateX(-25%)' },
					'50%': { transform: 'translateX(0)' }
				}
			}
		}
	},
	plugins: []
};
