# Installation

## Install required tools

To start developing JavaScript with PicoScratch MINT, you need to install Node.JS. You can download the installer from the [official Node.js website](https://nodejs.org/). The faster [bun runtime](https://bun.sh) is also supported (Instead of node or npm, use bun).

## Create a new project

Create a new directory for your project and run the following command to initialize a new Node.js project:

Linux:
```bash
touch main.js
npm init -y
```

Windows:
```cmd
echo. 2>main.js
npm init -y
```

## Install the PicoScratch MINT package

To install the PicoScratch MINT package, run the following command:

```bash
npm install psmint
```

## Switch to ES modules

::: code-group
```json [package.json] {6}
{
	"name": "my-mint-project",
	"version": "1.0.0",
	"description": "",
	"main": "main.js",
	"type": "module",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}

```
:::