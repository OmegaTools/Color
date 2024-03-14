
import { assertEquals } from 'Assert'
import { hslToRGB } from './HSL.ts'


function assert ( a : Array<number> , b : Array<number> ){
    assertEquals(hslToRGB(a),b)
}


Deno.test('HSL array conversion retains alpha',() => {
    assert([ 0 , 0 , 0 , 64 ],[ 0 , 0 , 0 , 64 ])
})


Deno.test('HSL array conversion works',() => {

    //  Black

    assert([ 0 , 0 , 0 ],[ 0 , 0 , 0 ])


    //  White

    assert([ 0 , 0 , 100 ],[ 255 , 255 , 255 ])


    //  Red

    assert([ 0 , 100 , 50 ],[ 255 , 0 , 0 ])


    //  Green

    assert([ 120 , 100 , 50 ],[ 0 , 255 , 0 ])


    //  Blue

    assert([ 240 , 100 , 50 ],[ 0 , 0 , 255 ])

})
