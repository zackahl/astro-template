import { AppConfig } from './src/utils/config';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				display: [AppConfig.theme.font.display, 'sans-serif'], // font-display
				// body: [AppConfig.theme.font.body, 'sans-serif'], // font-body
				sans: [AppConfig.theme.font.sans, 'sans-serif'], // font-sans
				// serif: [AppConfig.theme.font.serif, 'serif'], // font-serif
				// mono: [AppConfig.theme.font.mono, 'mono'], // font-mono
			}
		},
	},
	plugins: [
		require("daisyui"),
		require('@tailwindcss/typography'),
		require("tailwindcss-animated"),
		require('tailwind-scrollbar')
	],
	daisyui: {
		themes: [
			AppConfig.theme.light,
			AppConfig.theme.dark,
			{
				customlight: {
					"primary": "rgb(47, 46, 65)",
					"secondary": "rgb(85, 83, 117)",
					"accent": "rgb(255, 101, 132)",
					"neutral": "rgb(246, 245, 255)",
					"base-100": "rgb(255, 255, 255)",
					"base-200": "rgb(248, 247, 255)",
					"base-300": "rgb(242, 240, 255)"
				},
				customdark: {
					"primary": "rgb(255, 101, 132)",
					"secondary": "rgb(250, 147, 168)",
					"accent": "rgb(255, 101, 132)",
					"neutral": "rgb(55, 53, 74)",
					"base-100": "rgb(35, 34, 48)",
					"base-200": "rgb(28, 27, 38)",
					"base-300": "rgb(22, 21, 31)"
				}
			}
		],
		darkTheme: AppConfig.theme.dark
	},
	darkMode: ['selector', `[data-theme="${AppConfig.theme.dark}"]`],
}
