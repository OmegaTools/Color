

import { assertEquals } from 'Assert'
import { cmykToHSL } from './CMYK.ts'


function assert ( a : Array<number> , b : Array<number> ){
    assertEquals(cmykToHSL(a),b)
}


Deno.test('CMYK Array Conversion',() => {

    //  Black

    assert([ 0 , 0 , 0 , 100 ],[ 0 , 0 , 0 ])


    //  White

    assert([ 0 , 0 , 0 , 0 ],[ 0 , 0 , 100 ])


    //  Red

    assert([ 0 , 100 , 100 , 0 ],[ 0 , 100 , 50 ])


    //  Green

    assert([ 100 , 0 , 100 , 0 ],[ 120 , 100 , 50 ])


    //  Blue

    assert([ 100 , 100 , 0 , 0 ],[ 240 , 100 , 50 ])

})
