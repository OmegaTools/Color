
/**
 *  @module
 *
 *  Hex code to RGB(A) conversion functions.
 */

export { parseHexToRGB , hexToRGB }


/**
 *  Matches double digit RGB & RGBA strings
 *  #00000000
 *  #000000
 */

const Double_Channel = new RegExp(
    `#?${ `([0-9a-f]{2})`.repeat(4) }?`,'i')


/**
 *  Matches single digit RGB & RGBA strings
 *  #0000
 *  #000
 */

const Single_Channel = new RegExp(
    `#?${ `([0-9a-f]{1})`.repeat(4) }?`,'i')


/**
 *  Tries to match any hex color digits.
 */

function matchChannels ( hex : string ){
    return hex.match(Double_Channel)
        ?? hex.match(Single_Channel)
}



/**
 *  Parses a hex RGB(A) color code into a RGB(A) array.
 *
 *  ### Examples
 *
 *  Parsing a long form RGBA hex code with alpha:
 *
 *  ```typescript
 *  const hex = '#FF000069' // Red
 *
 *  const rgb = hexToRGB(hex)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0 , 69 ]
 *  ```
 *
 *  Parsing a short form RGB hex code without #:
 *
 *  ```typescript
 *  const hex = 'F00' // Red
 *
 *  const rgb = hexToRGB(hex)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0 ]
 *  ```
 *
 *  @param hex Hex RGB(A) color code string.
 *
 *  @returns [ Hue 0 - 360 , Saturation 0 - 100 , Lightness 0 - 100 ]
 */

function hexToRGB (
    hex : string
) : Array<number> {
    return parseHexToRGB(hex)!
}


/**
 *  Attempts to parse a string as a RGB(A) hex color code into a RGB(A) array.
 *
 *  ### Examples
 *
 *  Parsing a long form RGBA hex code with alpha:
 *
 *  ```typescript
 *  const hex = '#FF000069' // Red
 *
 *  const rgb = parseHexToRGB(hex)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0  , 69 ]
 *  ```
 *
 *  Parsing a short form RGB hex code without #:
 *
 *  ```typescript
 *  const hex = 'F00' // Red
 *
 *  const rgb = parseHexToRGB(hex)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0 ]
 *  ```
 *
 *  Parsing an invalid hex color code:
 *
 *  ```typescript
 *  const hex = 'Invalid'
 *
 *  const rgb = parseHexToRGB(hex)
 *
 *  console.debug(rgb) // null
 *  ```
 *
 *  @param hex Hex RGB(A) color code string.
 *
 *  @returns [ Hue 0 - 360 , Saturation 0 - 100 , Lightness 0 - 100 , ( Alpha 0 - 255 ) ]
 *
 *  Returns null if no color code could be matched.
 */

function parseHexToRGB (
    hex : string
) : null | Array<number> {

    const match = matchChannels(hex)

    if( ! match )
        return null

    const channels = match.slice(1) as unknown as Array< undefined | string >

    return channels
        .filter(( channel ) => !! channel )
        .map(( channel ) => `${ channel }${ channel }`.slice(0,2) )
        .map(( channel ) => parseInt(channel,16) )
}
