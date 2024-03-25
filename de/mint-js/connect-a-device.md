# Ein Gerät anschließen

Um ein PicoScratch MINT-Gerät mit Ihrer JavaScript-Anwendung zu verbinden, müssen Sie die Bibliothek importieren und ein neues `MINT`-Objekt erstellen. Das `MINT`-Objekt wird verwendet, um sich mit dem Gerät zu verbinden und Sensordaten zu lesen.

::: code-group
```js [main.js]
import MINT from "psmint";

const mint = new MINT();
await mint.requestDevice(process.env.MINT_SERIAL)
console.log("Verbunden mit Gerät");

// Sensordaten lesen
mint.on("sensor", (data) => {
	console.log(data);
});
```
:::

Im obigen Beispiel wird das `MINT`-Objekt erstellt und die Methode `requestDevice` aufgerufen, um eine Verbindung mit dem Gerät herzustellen. Die Umgebungsvariable "MINT_SERIAL" wird verwendet, um die Seriennummer des Geräts anzugeben, mit dem eine Verbindung hergestellt werden soll. Sobald das Gerät verbunden ist, wird das Ereignis `sensor` ausgelöst, sobald neue Sensordaten verfügbar sind.

Um das Beispiel auszuführen, müssen Sie die Umgebungsvariable "MINT_SERIAL" auf die Seriennummer Ihres Geräts setzen. Sie finden die Seriennummer auf der Rückseite des Geräts oder im Menü "Version" des PicoScratch MINT-Geräts. Vergewissern Sie sich, dass sich das Gerät im Netzwerkmodus befindet und dass beide Geräte mit dem Internet verbunden sind.

Linux:
```bash
MINT_SERIAL=123456 node main.js
```

Windows:
```cmd
set MINT_SERIAL=123456
node main.js
```