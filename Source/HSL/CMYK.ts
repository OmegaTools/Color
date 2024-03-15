
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
 *  Converts CMYK(A) color arrays to HSL(A) color arrays.
 *
 *  @param channels [ Cyan , Magenta , Yellow , Key , ( Alpha ) ]
 *  @returns [ Hue , Saturation , Lightness , ( Alpha ) ]
 */

function cmykToHSL (
    cmyk : Array<number>
) : Array<number> {
    return toHSL(cmyk)
        .concat(cmyk.slice(3,1))
}
