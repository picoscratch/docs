# Connect a device

To connect a PicoScratch MINT device with your JavaScript application, you need to import the library and create a new `MINT` object. The `MINT` object is used to connect to the device and read sensor data.

::: code-group
```js [main.js]
import MINT from "psmint";

const mint = new MINT();
await mint.requestDevice(process.env.MINT_SERIAL)
console.log("Connected to device");

// Read sensor data
mint.on("sensor", (data) => {
	console.log(data);
});
```
:::

In the example above, the `MINT` object is created and the `requestDevice` method is called to connect to the device. The `MINT_SERIAL` environment variable is used to specify the serial number of the device to connect to. Once the device is connected, the `sensor` event is emitted whenever new sensor data is available.

To run the example, you need to set the `MINT_SERIAL` environment variable to the serial number of your device. You can find the serial number on the back of the device or in the "Version" menu of the PicoScratch MINT device. Make sure that the device is in network mode and that both devices are connected to the internet.

Linux:
```bash
MINT_SERIAL=123456 node main.js
```

Windows:
```cmd
set MINT_SERIAL=123456
node main.js
```