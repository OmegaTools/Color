
/**
 *  @module
 *
 *  HSL(A) to RGB(A) conversion functions.
 */

export { hslToRGB }


const { min , max , round } = Math

const offsets = [ 0 , 8 , 4 ]


function toRGB (
    hsl : Array<number>
){

    let [ Hue , Saturation , Lightness ] = hsl

    //  [ 0 - 100 ] -> [ 0 - 1 ]

    Saturation *= 0.01
    Lightness *= 0.01

    //  To Degree

    Hue *= 1 / 30;

    const a = Saturation * min(Lightness,1 - Lightness);

    return offsets
        .map(toChannel);


    function toChannel ( offset : number ){

        offset += Hue;

        //  Sector -> Sector Index

        offset %= 12;

        //  Nearest Sector

        offset = min(offset - 3,9 - offset,1);

        //  Limit Sectors

        offset = max(-1,offset);

        //  To Color

        offset *= a;

        //  Correct

        offset = Lightness - offset;

        //  To 265

        offset *= 255;

        //  To Int

        return round(offset);
    }
}


/**
 *  Converts a HSL(A) color array to a RGB(A) color array.
 *
 *  ### Examples
 *
 *  Conversion without alpha channel:
 *
 *  ```typescript
 *  const hsl = [ 0 , 100 , 50 ] // Red
 *
 *  const rgb = hslToRGB(hsl)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0 ]
 *  ```
 *
 *  Conversion with alpha channel:
 *
 *  ```typescript
 *  const hsl = [ 0 , 100 , 50 , 69 ] // Green
 *
 *  const rgb = hslToRGB(hsl)
 *
 *  console.debug(rgb) // [ 255 , 0 , 0 , 69 ]
 *  ```
 *
 *  @param channels [ 𝗛𝘂𝗲 0 - 360 , 𝗦𝗮𝘁𝘂𝗿𝗮𝘁𝗶𝗼𝗻 0 - 100 , 𝗟𝗶𝗴𝗵𝘁𝗻𝗲𝘀𝘀 0 - 100 , ( 𝗔𝗹𝗽𝗵𝗮 0 - 255 ) ]
 *
 *  @returns [ 𝗥𝗲𝗱 0 - 255 , 𝗚𝗿𝗲𝗲𝗻 0 - 255 , 𝗕𝗹𝘂𝗲 0 - 255 , ( 𝗔𝗹𝗽𝗵𝗮 0 - 255 ) ]
 */

function hslToRGB (
    hsl : Array<number>
) : Array<number> {
    return toRGB(hsl)
        .concat(hsl.splice(3,1));
}
