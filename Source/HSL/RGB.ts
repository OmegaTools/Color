
export { rgbToHSL }


const { min , max } = Math


/**
 *  Normalize 8bit color channel
 *  [ 0 - 255 ]  ➞  [ 0 - 1 ]
 */

const normalize = ( byte : number ) => byte / 255


function toHSL (
    rgb : Array<number>
){

    const [ red , green , blue ] = rgb
        .map(normalize)

    const
        minimum = min(red,green,blue) ,
        maximum = max(red,green,blue)

    const
        chroma = maximum - minimum ,
        lightness = ( maximum + minimum ) * .5

    return [
        calcHue() ,
        calcSaturation() * 100 ,
        lightness * 100
    ]


    function calcHue(){

        if( chroma === 0 )
            return 0

        let hue !: number

        switch ( maximum ){
        case green : hue = ( blue  - red   ) ; break
        case blue  : hue = ( red   - green ) ; break
        case red   : hue = ( green - blue  ) ; break
        }

        hue /= chroma

        switch ( maximum ){
        case red   : hue += 0 ; break
        case green : hue += 2 ; break
        case blue  : hue += 4 ; break
        }

        hue *= 60
        hue %= 360

        if( hue < 0 )
            hue += 360

        return hue
    }


    function calcSaturation(){

        if( [ 0 , 1 ].includes(lightness) )
            return 0

        return (
            ( maximum - lightness ) /
            min(lightness,1 - lightness)
        )
    }
}


/**
 *  Converts RGB(A) color arrays to HSL(A) color arrays.
 *
 *  @param channels [ Red , Green , Blue , ( Alpha ) ]
 *  @returns [ Hue , Saturation , Lightness , ( Alpha ) ]
 */

function rgbToHSL (
    rgb : Array<number>
) : Array<number> {
    return toHSL(rgb)
        .concat(rgb.slice(3,1))
}
