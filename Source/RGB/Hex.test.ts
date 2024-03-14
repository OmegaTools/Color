
import { parseHexToRGB } from './Hex.ts'
import { assertEquals } from 'Assert'


function assert ( a : string , b : null | Array<number> ){
    assertEquals(parseHexToRGB(a),b)
}


Deno.test('Hex string conversion retains alpha',() => {
    assert('#00000040',[ 0 , 0 , 0 , 64 ])
})


Deno.test('Safe hex string conversion',() => {

    //  Black

    assert('#000000',[ 0 , 0 , 0 ])


    //  White

    assert('#FFFFFF',[ 255 , 255 , 255 ])


    //  Red

    assert('#FF0000',[ 255 , 0 , 0 ])


    //  Green

    assert('#00FF00',[ 0 , 255 , 0 ])


    //  Blue

    assert('#0000FF',[ 0 , 0 , 255 ])

})


Deno.test('Unsafe hex string conversion',() => {

    assert('',null)

    assert('#XXXXXX',null)

    assert('#00000000XX',[ 0 , 0 , 0 , 0 ])
})
