# Reading all sensors

The `sensor` module provides an easy way to read all sensors of the PicoScratch MINT device. The `read_sensors` function reads all sensors and returns the data along with general information about the sensors.

```python
from sensor import read_sensors

data = read_sensors()

print(data)
```

Example output:
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

## Sensor data format

The sensor data is returned as a list of sensor data. Each sensor data object contains the following fields:

- `unit`: The unit of the sensor data. For example, `°C` for temperature in degrees Celsius.
- `isI2C`: A boolean value indicating whether the sensor is connected via I2C.
- `isLoading`: A boolean value indicating whether the sensor is currently loading data.
- `value`: The current value of the sensor. Might be `None` if the sensor is loading.
- `id`: The ID of the sensor. Used to identify the type of sensor.

Along with information used by the Panels UI:

::: warning
The min and max values are not the actual minimum and maximum values of the sensor. It might be beyond these values.
:::
- `min`: The minimum value of the progress bar.
- `max`: The maximum value of the progress bar.
- `friendlyName`: The friendly name of the sensor. For example, `Temp.` for temperature.
- `traffic`: The traffic light information of the sensor. Contains the `good` and `bad` values of the sensor.
