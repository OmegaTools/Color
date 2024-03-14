
<br>

<div align = center>

# Omega / Color

*Various color conversions.*

<br>

[![Badge Stars]][Stars]   

</div>

<br>

### Hex RGB(A)

```typescript
const hex = '#0000FF' // Blue

const rgb = hexToRGB(hex)

console.debug(rgb) // [ 0 , 0 , 255 ]
```

<br>

### HSL(A)

```typescript
const hsl = [ 0 , 100 , 50 ] // Red

const rgb = hslToRGB(hsl)

console.debug(rgb) // [ 255 , 0 , 0 ]
```

<br>

### CMYK(A)

```typescript
const cmyka = [ 100 , 0 , 100 , 0 ] // Green

const rgb = cmykToRGB(cmyka)

console.debug(rgb) // [ 120 , 100 , 50 ]
```

<br>


<!----------------------------------------------------------------------------->

[Stars]: https://github.com/OmegaTools/Color
[Usage]: Documentation/Usage.md


<!---------------------------------[ Badges ]---------------------------------->

[Badge Stars]: https://img.shields.io/github/stars/OmegaTools/RGB?style=for-the-badge&logoColor=white&logo=Trustpilot&labelColor=FF66AA&color=cf538b

