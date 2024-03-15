
/**
 *  @module
 *
 *  CMYK(A) to HSL(A) conversion functions.
 */

export { cmykToHSL }

import { rgbToHSL } from './RGB.ts'


function normalize ( channels : Array<number> ){
    return channels
        .map(( channel ) => channel / 100 )
        .map(( channel ) => 1 - channel )
}


function toHSL (
    cymk : Array<number>
){

    const [ C , M , Y , K ] =
        normalize(cymk)

    return rgbToHSL([
        255 * C * K ,
        255 * M * K ,
        255 * Y * K ,
        cymk[3]
    ])
}


/**
 *  Converts a CMYK(A) color array to a HSL(A) color array.
 *
 *  ### Examples
 *
 *  Conversion without alpha channel:
 *
 *  ```typescript
 *  const cmyk = [ 0 , 100 , 100 , 0 ] // Red
 *
 *  const hsl = cmykToHSL(cmyk)
 *
 *  console.debug(hsl) // [ 0 , 100 , 50 ]
 *  ```
 *
 *  Conversion with alpha channel:
 *
 *  ```typescript
 *  const cmyka = [ 100 , 0 , 100 , 0 , 69 ] // Green
 *
 *  const hsl = cmykToHSL(cmyka)
 *
 *  console.debug(hsl) // [ 120 , 100 , 50 , 69 ]
 *  ```
 *
 *  @param cmyk [ 𝗖𝘆𝗮𝗻 0 - 100 , 𝗠𝗮𝗴𝗲𝗻𝘁𝗮 0 - 100 , 𝗬𝗲𝗹𝗹𝗼𝘄 0 - 100 , 𝗞𝗲𝘆 0 - 100 , ( 𝗔𝗹𝗽𝗵𝗮 0 - 255 ) ]
 *
 *  @returns [ 𝗛𝘂𝗲 0 - 360 , 𝗦𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 0 - 100  , 𝗟𝗶𝗴𝗵𝘁𝗻𝗲𝘀𝘀 0 - 100 , ( 𝗔𝗹𝗽𝗵𝗮 0 - 255 ) ]
 */

function cmykToHSL (
    cmyk : Array<number>
) : Array<number> {
    return toHSL(cmyk)
        .concat(cmyk.slice(3,1))
}
