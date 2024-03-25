# Your first script

Creating new scripts is easy. You can connect the device via WiFi or a USB-C cable (Chrome only, Apple devices are not supported. Use WiFi in this case) on the [PicoScratch MINT portal](https://mint.picoscratch.de) and create a new script file in the files tab.

## Example script

```python
from display import oled
from time import sleep

# Clear the display (fill with black)
oled.fill(0)

# Draw some text
oled.text("Hello, World!", 0, 0)

# Update the display
oled.show()

# Wait until exit
sleep(3)
```

You can now run this script on your device by navigating to "Scripts" in the main menu and selecting the script you just created. After 3 seconds, the script will exit back to the main menu.
