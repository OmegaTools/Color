
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
 *  Parses hex color codes into their respective RGB(A) channels.
 *
 *  @param hex Hex RGB(A) color code string.
 *  @returns Channels [ Red , Green , Blue , ( Alpha ) ] each ( 0 - 255 )
 *
 *
 *  ## Examples
 *
 *  Long form RGBA color codes:
 *
 *  ```typescript
 *  hexToRGB('#AABBCCDD')
 *  hexToRGB('AABBCCDD')
 *  ```
 *
 *  Long form RGB color codes:
 *
 *  ```typescript
 *  hexToRGB('#AABBCC')
 *  hexToRGB('AABBCC')
 *  ```
 *
 *  Short form RGBA color codes:
 *
 *  ```typescript
 *  hexToRGB('#ABCD')
 *  hexToRGB('ABCD')
 *  ```
 *
 *  Short form RGB color codes:
 *
 *  ```typescript
 *  hexToRGB('#ABC')
 *  hexToRGB('ABC')
 *  ```
 */

function hexToRGB (
    hex : string
) : Array<number> {
    return parseHexToRGB(hex)!
}


/**
 *  Attempts to parse a string with a hex color code into its respective RGB(A) channels.
 *
 *  @param hex String possibly containing a hex RGB(A) color code.
 *  @returns null if not found, otherwise Channels [ Red , Green , Blue , ( Alpha ) ] each ( 0 - 255 )
 *
 *  Check {@link hexToRGB} for examples
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
