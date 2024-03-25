# Verwendung des OLED-Displays

Das OLED-Display ist ein 128x64 Pixel großes Display, das zur Anzeige von Text, Bildern und anderen Grafiken verwendet werden kann. Das Display wird über das I2C-Protokoll gesteuert.

Je nach Modell handelt es sich entweder um einen SSD1306- oder SH1106-Display-Controller.

## Das Modul `display` und der Export `oled`

Die `oled` Instanz wird vom `display` Modul exportiert. Sie können diese Instanz verwenden, um mit dem OLED-Display zu interagieren.

Das Gerät initialisiert die Variable `oled` automatisch mit dem richtigen Display-Treiber. Sie haben alle die gleichen Methoden und Eigenschaften des [MicroPython `framebuf`-Moduls](https://docs.micropython.org/en/latest/library/framebuf.html).

```python
from display import oled
from time import sleep

# Das Display löschen (mit Schwarz füllen)
oled.fill(0)

# Zeichne einen Text
oled.text("Hallo, Welt!", 0, 0)

# Aktualisieren der Anzeige
oled.show()

# Warten bis zur Beendigung
sleep(3)
```

Dieses Skript zeigt den Text "Hallo, Welt!" für 3 Sekunden auf dem Display an, bevor es zum Hauptmenü zurückkehrt.
