

import { assertEquals } from 'Assert'
import { rgbToHSL } from './RGB.ts'


function assert ( a : Array<number> , b : Array<number> ){
    assertEquals(rgbToHSL(a),b)
}


Deno.test('RGB Array Conversion',() => {

    //  Black

    assert([ 0 , 0 , 0 ],[ 0 , 0 , 0 ])


    //  White

    assert([ 255 , 255 , 255 ],[ 0 , 0 , 100 ])


    //  Red

    assert([ 255 , 0 , 0 ],[ 0 , 100 , 50 ])


    //  Green

    assert([ 0 , 255 , 0 ],[ 120 , 100 , 50 ])


    //  Blue

    assert([ 0 , 0 , 255 ],[ 240 , 100 , 50 ])

})
