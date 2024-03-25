# Miscellaneous

## Get serial number of device

```python
from util import get_serial

print(get_serial()) # => 123456
```

## Set power saving mode

```python
from util import powerSave

powerSave(True) # Enable power saving mode
powerSave(False) # Disable power saving mode
print(powerSave()) # Get power saving mode status
```