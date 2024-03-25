# Ihr erstes Skript

Das Erstellen neuer Skripte ist einfach. Verbinden Sie das Gerät über WLAN oder ein USB-C-Kabel (nur Chrome, Apple-Geräte werden nicht unterstützt. Verwenden Sie in diesem Fall WLAN) mit dem [PicoScratch MINT Portal](https://mint.picoscratch.de) und erstellen Sie eine neue Skriptdatei auf der Registerkarte Dateien.

## Beispiel-Skript

```python
from display import oled
from time import sleep

## Das Display löschen (mit Schwarz füllen)
oled.fill(0)

# Zeichne einen Text
oled.text("Hallo, Welt!", 0, 0)

# Aktualisieren der Anzeige
oled.show()

# Warten bis zur Beendigung
sleep(3)
```

Sie können dieses Skript nun auf Ihrem Gerät ausführen, indem Sie im Hauptmenü zu "Scripts" navigieren und das soeben erstellte Skript auswählen. Nach 3 Sekunden kehrt das Skript zum Hauptmenü zurück.