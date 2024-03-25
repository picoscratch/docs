# Sensoren auslesen

Das Modul `sensor` bietet eine einfache Möglichkeit, alle Sensoren des PicoScratch MINT-Geräts auszulesen. Die Funktion `read_sensors` liest alle Sensoren aus und gibt die Daten zusammen mit allgemeinen Informationen über die Sensoren zurück.

```python
from sensor import read_sensors

data = read_sensors()

print(data)
```

Beispiel-Ausgabe:
```json
[
	{
		"unit": "°C",
		"min": -10,
		"max": 40,
		"friendlyName": "Temp.",
		"isI2C": false,
		"isLoading": false,
		"value": 25.5,
		"traffic": {
			"good": 20,
			"bad": 40
		},
		"id": "temp"
	}
	// ...
]
```

## Sensor-Datenformat

Die Sensordaten werden als eine Liste von Sensordaten zurückgegeben. Jedes Sensordatenobjekt enthält die folgenden Felder:

- `unit`: Die Einheit der Sensordaten. Zum Beispiel, `°C` für die Temperatur in Grad Celsius.
- `isI2C`: Ein boolescher Wert, der angibt, ob der Sensor über I2C angeschlossen ist.
- `isLoading`: Ein boolescher Wert, der angibt, ob der Sensor gerade Daten lädt.
- `value`: Der aktuelle Wert des Sensors. Kann `None` sein, wenn der Sensor gerade lädt.
- `id`: Die ID des Sensors. Dient zur Identifizierung des Sensortyps.

Zusammen mit Informationen, die von der Panels UI verwendet werden:

::: warning WARNUNG
Die Mindest- und Höchstwerte sind nicht die tatsächlichen Mindest- und Höchstwerte des Sensors. Der Wert kann über diesen Werten liegen.
:::
- `min`: Der Mindestwert des Fortschrittsbalkens.
- `max`: Der Maximalwert des Fortschrittsbalkens.
- `friendlyName`: Der freundliche Name des Sensors. Zum Beispiel `Temp.` für Temperatur.
- `traffic`: Die Ampelinformationen des Sensors. Enthält die `good`- und `bad`-Werte des Sensors.
