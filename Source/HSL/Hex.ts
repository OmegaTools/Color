
export { parseHexToHSL , hexToHSL }


import { parseHexToRGB , hexToRGB } from '../mod.ts'
import { rgbToHSL } from './RGB.ts'


/**
 *  Parses hex color codes into their respective HSL(A) channels.
 *
 *  @param hex Hex HSL(A) color code string.
 *  @returns Channels [ Hue , Saturation , Lightness , ( Alpha ) ] each ( 0 - 255 )
 *
 *  Check {@link hexToRGB} for examples
 */

function hexToHSL (
    hex : string
) : Array<number> {
    return rgbToHSL(hexToRGB(hex))
}


/**
 *  Attempts to parse a string with a hex color code into its respective HSL(A) channels.
 *
 *  @param hex String possibly containing a hex HSL(A) color code.
 *  @returns null if not found, otherwise Channels [ Hue , Saturation , Lightness , ( Alpha ) ] each ( 0 - 255 )
 *
 *  Check {@link hexToRGB} for examples
 */

function parseHexToHSL (
    hex : string
) : null | Array<number> {

    const rgb = parseHexToRGB(hex)

    if( rgb )
        return rgbToHSL(rgb)

    return null
}
