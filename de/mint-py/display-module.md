# Das `display` Modul

Dieses Modul bietet zusätzliche displaybezogene Funktionen, die nicht durch den `oled`-Export und das `framebuf`-Modul abgedeckt werden.

## Eigenschaften

| Variable | Beispiel | Beschreibung |
| --- | --- | --- |
| `display_width` | `128` | Die Breite des Displays in Pixeln. |
| `display_height` | `64` | Die Höhe des Displays in Pixeln. |

## Funktionen

| Funktion | Beispiel | Beschreibung |
| --- | --- | --- |
| `brightness(value=None)` | `display.brightness(255)` - Setzt die Displayhelligkeit auf 100%.<br>`display.brightness()` - Abfrage der aktuellen Display-Helligkeit. | SEinstellen oder Abrufen der Display-Helligkeit. Der Wert sollte zwischen 0 und 255 liegen. |
| `invertArea(oled, x, y, w, h)` | `display.invertArea(oled, 0, 0, 128, 64)` | Invertiert den durch die Koordinaten `x`, `y`, `w` (Breite) und `h` (Höhe) angegebenen Bereich des Displays. |
| `readPBM(filename)` | `display.readPBM("connecting.pbm")` | Einlesen einer PBM-Bilddatei in einen `framebuf`. [Weitere Informationen hier](/mint-py/pbm-images) |
