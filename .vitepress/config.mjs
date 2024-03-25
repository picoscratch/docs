import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "PicoScratch",
	description: "",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{
				text: "MINT",
				activeMatch: "/mint(.*)/",
				items: [
					{ text: "MINT", link: "/mint/", activeMatch: "/mint/" },
					{ text: "MINT.py", link: "/mint-py/", activeMatch: "/mint-py/" },
					{ text: "MINT.js", link: "/mint-js/", activeMatch: "/mint-js/" },
				]
			},
			{ text: "Learn", link: "/learn/", activeMatch: "/learn/" }
		],

		sidebar: {
			"/mint-py": [
				{
					text: "MINT Python",
					items: [
						{ text: "Welcome!", link: "/mint-py/" },
						{ text: "Your first script", link: "/mint-py/first-script" }
					]
				},
				{
					text: "OLED Display",
					items: [
						{ text: "Interfacing with the OLED display", link: "/mint-py/oled" },
						{ text: "The display module", link: "/mint-py/display-module" },
						{ text: "Working with PBM images", link: "/mint-py/pbm-images" }
					]
				},
				{
					text: "Sensor Data",
					items: [
						{ text: "Reading all sensors", link: "/mint-py/read-all-sensors" },
					]
				},
				{
					text: "Miscellaneous",
					items: [
						{ text: "Miscellaneous", link: "/mint-py/misc" },
					]
				}
			],
			"/mint-js": [
				{
					text: "MINT JavaScript",
					items: [
						{ text: "Welcome!", link: "/mint-js/" },
						{ text: "Installation", link: "/mint-js/installation" },
						{ text: "Connect a device", link: "/mint-js/connect-a-device" }
					]
				}
			],
			"/mint": [
				{
					text: "MINT",
					items: [
						{ text: "Welcome!", link: "/mint/" },
						{ text: "FAQ", link: "/mint/faq" }
					]
				},
				{
					text: "Calibration",
					items: [
						{ text: "Calibrate TDS sensor", link: "/mint/calibrate-tds" },
						{ text: "Calibrate pH sensor", link: "/mint/calibrate-ph" }
					]
				},
			],
			"/learn": [
				{
					text: "Learn",
					items: [
						{ text: "Welcome!", link: "/learn/" },
						{ text: "Demo", link: "/learn/demo" },
					]
				},
				{
					text: "Manager for administrators",
					items: [
						{ text: "Logging in", link: "/learn/admin-login" },
						{ text: "Managing teachers", link: "/learn/manage-teachers" },
					]
				}
			]
		},

		socialLinks: [
			{ icon: "github", link: "https://github.com/picoscratch" }
		],

		editLink: {
			pattern: "https://github.com/picoscratch/docs/edit/main/docs/:path"
		},

		footer: {
			copyright: "Copyright © 2024 PicoScratch"
		},

		search: {
			provider: "local"
		},

		externalLinkIcon: true,
		lastUpdated: true,
		lazyLoading: true
	},
	cleanUrls: true,

	locales: {
		root: {
			label: "English",
			lang: "en"
		},
		de: {
			label: "Deutsch",
			lang: "de",
			link: "/de/",
			themeConfig: {
				nav: [
					{
						text: "MINT",
						activeMatch: "/de/mint(.*)/",
						items: [
							{ text: "MINT", link: "/de/mint/", activeMatch: "/de/mint/" },
							{ text: "MINT.py", link: "/de/mint-py/", activeMatch: "/de/mint-py/" },
							{ text: "MINT.js", link: "/de/mint-js/", activeMatch: "/de/mint-js/" },
						]
					},
					{ text: "Learn", link: "/de/learn/", activeMatch: "/de/learn/" }
				],
				sidebar: {
					"/de/mint-py": [
						{
							text: "MINT Python",
							items: [
								{ text: "Willkommen!", link: "/de/mint-py/" },
								{ text: "Dein erstes Skript", link: "/de/mint-py/first-script" }
							]
						},
						{
							text: "OLED Display",
							items: [
								{ text: "Verwendung des OLED-Displays", link: "/de/mint-py/oled" },
								{ text: "Das display Modul", link: "/de/mint-py/display-module" },
								{ text: "Verwendung von PBM-Bildern", link: "/de/mint-py/pbm-images" }
							]
						},
						{
							text: "Sensordaten",
							items: [
								{ text: "Sensoren auslesen", link: "/de/mint-py/read-all-sensors" },
							]
						},
						{
							text: "Diverses",
							items: [
								{ text: "Diverses", link: "/de/mint-py/misc" },
							]
						}
					],
					"/de/mint-js": [
						{
							text: "MINT JavaScript",
							items: [
								{ text: "Willkommen!", link: "/de/mint-js/" },
								{ text: "Installation", link: "/de/mint-js/installation" },
								{ text: "Ein Gerät verbinden", link: "/de/mint-js/connect-a-device" }
							]
						}
					],
					"/de/mint": [
						{
							text: "MINT",
							items: [
								{ text: "Willkommen!", link: "/de/mint/" },
								{ text: "FAQ", link: "/de/mint/faq" }
							]
						},
						{
							text: "Kalibrierung",
							items: [
								{ text: "TDS-Sensor kalibrieren", link: "/de/mint/calibrate-tds" },
								{ text: "pH-Sensor kalibrieren", link: "/de/mint/calibrate-ph" }
							]
						},
					],
					"/de/learn": [
						{
							text: "Learn",
							items: [
								{ text: "Willkommen!", link: "/de/learn/" },
							]
						}
					]
				},
			}
		}
	}
})
