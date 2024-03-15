
export { parseHexToHSL , hexToHSL }


import { parseHexToRGB , hexToRGB } from '../mod.ts'
import { rgbToHSL } from './RGB.ts'


/**
 *  Parses a hex RGB(A) color code into a HSL(A) array.
 *
 *  ### Examples
 *
 *  Parsing a long form RGBA hex code with alpha:
 *
 *  ```typescript
 *  const hex = '#FF000069' // Red
 *
 *  const hsl = hexToHSL(hex)
 *
 *  console.debug(hsl) // [ 0 , 100 , 50 , 69 ]
 *  ```
 *
 *  Parsing a short form RGB hex code without #:
 *
 *  ```typescript
 *  const hex = 'F00' // Red
 *
 *  const hsl = hexToHSL(hex)
 *
 *  console.debug(hsl) // [ 0 , 100 , 50 ]
 *  ```
 *
 *  @param hex Hex RGB(A) color code string.
 *
 *  @returns [ 𝗛𝘂𝗲 0 - 360 , 𝗦𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 0 - 100 , 𝗟𝗶𝗴𝗵𝘁𝗻𝗲𝘀𝘀 0 - 100 ]
 */

function hexToHSL (
    hex : string
) : Array<number> {
    return rgbToHSL(hexToRGB(hex))
}


/**
 *  Attempts to parse a string as a RGB(A) hex color code into a HSL(A) array.
 *
 *  ### Examples
 *
 *  Parsing a long form RGBA hex code with alpha:
 *
 *  ```typescript
 *  const hex = '#FF000069' // Red
 *
 *  const hsl = parseHexToHSL(hex)
 *
 *  console.debug(hsl) // [ 0 , 100 , 50 , 69 ]
 *  ```
 *
 *  Parsing a short form RGB hex code without #:
 *
 *  ```typescript
 *  const hex = 'F00' // Red
 *
 *  const hsl = parseHexToHSL(hex)
 *
 *  console.debug(hsl) // [ 0 , 100 , 50 ]
 *  ```
 *
 *  Parsing an invalid hex color code:
 *
 *  ```typescript
 *  const hex = 'Invalid'
 *
 *  const hsl = parseHexToHSL(hex)
 *
 *  console.debug(hsl) // null
 *  ```
 *
 *  @param hex String possibly containing a hex RGB(A) color code.
 *
 *  @returns [ 𝗛𝘂𝗲 0 - 360 , 𝗦𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 0 - 100 , 𝗟𝗶𝗴𝗵𝘁𝗻𝗲𝘀𝘀 0 - 100 , ( 𝗔𝗹𝗽𝗵𝗮 0 - 255 ) ]
 *
 *  Returns null if no color code could be matched.
 */

function parseHexToHSL (
    hex : string
) : null | Array<number> {

    const rgb = parseHexToRGB(hex)

    if( rgb )
        return rgbToHSL(rgb)

    return null
}
