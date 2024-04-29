const site = {
	name: "Astro Template",
	title: "Astro Template | Astro and Tailwind CSS",
	description: "Boilerplate built with Astro, Vue, Tailwind CSS and daisyUI",
	author: "Zachary Kahl"
}

const contact = {
	address: '279 Carlisle St, Melbourne, Victoria',
	phone: '(07) 1234 1234',
	email: 'astro@template.com'
}

const social = {
	facebook: "https://www.facebook.com/",
	twitter: "https://twitter.com/",
	instagram: "https://instagram.com"
}

const layout = {
	header: {
		// left, center, right
		variant: "center",
		sticky: true,
		themeSwitch: true,
	},
	footer: {
		// minimal, centered, extensive
		variant: "extensive"
	},
	scrollToTop: true
}

const theme = {
	light: "customlight",
	dark: "customdark",
	font: {
		display: 'Poppins',
		// body: 'ui-sans-serif',
		sans: 'ui-sans-serif',
		// serif: 'ui-sans-serif',
		// mono: 'ui-sans-serif'
	},
	scrollbar: true

	/*
	Theme combos:
		- 	customlight / customdark
		- 	light / dark
		-	nord / night
		-	retro / coffee
		-	garden / dracula
		- 	emerald / forest
		- 	lofi / dim

	Fonts:
		Sans:
			-	ui-sans-serif (default)
			- 	Poppins
			-	Roboto
			-	Montserrat
			-	Open Sans
			-	Lato
			- 	Raleway
			-	Nunito
			-	Rubik
			-	Josefin Sans
			-	Oswald
			-	Bebas Neue
			-	Teko
			-	Comfortaa
			- 	Quicksand
			- 	Cabin
		Serif:
			-	Merriweather
			-	Satisfy
			-	Pacifico
			-	Courgette
			- 	Arvo
*/
}

const pages = [
    {
		link: "about",
		display: "About",
		icon: "mdi:account-group",
		children: [{
			link: 'history',
			display: 'History',
			anchor: true
		},
		{
			link: 'team',
			display: 'Team',
			anchor: true
		},
		{
			link: 'faqs',
			display: 'FAQs',
			anchor: true
		}
		]
	},
    {
		link: "products",
		display: "Products",
		icon: "mdi:package"
	},
    {
		link: "services",
		display: "Services",
		icon: "mdi:cog"
	},
	{
		link: "events",
		display: "Events",
		icon: "mdi:calendar"
	},
    {
		link: "blog",
		display: "Blog",
		icon: "mdi:post"
	},
	{
		link: "gallery",
		display: "Gallery",
		icon: "mdi:image-multiple"
	},
    {
		link: "contact",
		display: "Contact",
		icon: "mdi:phone"
	},
]

export const AppConfig = {
  site,
  contact,
  social,
  layout,
  theme,
  pages
};

export default AppConfig;