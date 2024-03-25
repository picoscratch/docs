# Diverses

## Seriennummer des Geräts abrufen

```python
from util import get_serial

print(get_serial()) # => 123456
```

## Energiesparmodus einstellen

```python
from util import powerSave

powerSave(True) # Energiesparmodus aktivieren
powerSave(False) # Energiesparmodus deaktivieren
print(powerSave()) # Status des Energiesparmodus abrufen
```