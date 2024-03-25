# The `display` module

This module provides additional display-related funtions not covered by the `oled` export and the `framebuf` module.

## Properties

| Variable | Example | Description |
| --- | --- | --- |
| `display_width` | `128` | The width of the display in pixels. |
| `display_height` | `64` | The height of the display in pixels. |

## Methods

| Method | Example | Description |
| --- | --- | --- |
| `brightness(value=None)` | `display.brightness(255)` - Set the display brightness to 100%.<br>`display.brightness()` - Get the current display brightness. | Set or get the display brightness. The value should be between 0 and 255. |
| `invertArea(oled, x, y, w, h)` | `display.invertArea(oled, 0, 0, 128, 64)` | Invert the area of the display specified by the coordinates `x`, `y`, `w`idth, and `h`eight. |
| `readPBM(filename)` | `display.readPBM("connecting.pbm")` | Read a PBM image file into a `framebuf`. [More information here](/mint-py/pbm-images) |
