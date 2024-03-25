# Interfacing with the OLED Display

The OLED display is a 128x64 pixel display that can be used to display text, images, and other graphics. The display is controlled using the I2C protocol.

It is either an SSD1306 or SH1106 display controller depending on your model.

## The `display` Module and the `oled` export

The `oled` instance is exported by the `display` module. You can use this instance to interact with the OLED display.

The device automatically initializes the variable `oled` with the correct display driver. They all have the same methods and properties from the [MicroPython `framebuf` module](https://docs.micropython.org/en/latest/library/framebuf.html).

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

This script will show the text "Hello, World!" on the display for 3 seconds before exiting back to the main menu.
