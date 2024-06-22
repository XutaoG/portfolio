/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"primary-light-1":
					"rgb(var(--color-primary-light-1) / <alpha-value>)",
				"primary-light-2":
					"rgb(var(--color-primary-light-2) / <alpha-value>)",
				"secondary-light-1":
					"rgb(var(--color-secondary-light-1) / <alpha-value>)",
				"secondary-light-2":
					"rgb(var(--color-secondary-light-2) / <alpha-value>)",

				"primary-dark-1":
					"rgb(var(--color-primary-dark-1) / <alpha-value>)",
				"primary-dark-2":
					"rgb(var(--color-primary-dark-2) / <alpha-value>)",
				"secondary-dark-1":
					"rgb(var(--color-secondary-dark-1) / <alpha-value>)",
				"secondary-dark-2":
					"rgb(var(--color-secondary-dark-2) / <alpha-value>)",
			},
			transitionProperty: {
				"navigation-button": "transform, background-color",
			},
		},
	},
	plugins: [],
	darkMode: "selector",
};
