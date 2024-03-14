

import { parseHexToHSL } from './Hex.ts'
import { assertEquals } from 'Assert'


function assert ( a : string , b : null | Array<number> ){
    assertEquals(parseHexToHSL(a),b)
}


Deno.test('Hex String Conversion',() => {

    //  Black

    assert('#000000',[ 0 , 0 , 0 ])


    //  White

    assert('#FFFFFF',[ 0 , 0 , 100 ])


    //  Red

    assert('#FF0000',[ 0 , 100 , 50 ])


    //  Green

    assert('#00FF00',[ 120 , 100 , 50 ])


    //  Blue

    assert('#0000FF',[ 240 , 100 , 50 ])

})
