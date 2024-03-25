# Installation

## Erforderliche Tools installieren

Um mit der Entwicklung von JavaScript mit PicoScratch MINT zu beginnen, müssen Sie Node.JS installieren. Sie können das Installationsprogramm von der [offiziellen Node.js-Website](https://nodejs.org/) herunterladen. Die schnellere [bun runtime](https://bun.sh) wird ebenfalls unterstützt (Anstelle von node oder npm, verwenden Sie bun).

## Erstellen Sie ein neues Projekt

Erstellen Sie ein neues Verzeichnis für Ihr Projekt und führen Sie den folgenden Befehl aus, um ein neues Node.js-Projekt zu initialisieren:

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

## Installieren Sie das PicoScratch MINT Paket

Um das PicoScratch MINT-Paket zu installieren, führen Sie den folgenden Befehl aus:

```bash
npm install psmint
```

## Wechseln Sie zu ES-Modulen

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