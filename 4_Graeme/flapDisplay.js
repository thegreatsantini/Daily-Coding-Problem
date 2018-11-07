/*
You notice that each flap character is on some kind of a rotor and the order of characters on each rotor is:


And after a long while you deduce that the display works like this:

Starting from the left, all rotors (from the current one to the end of the line) flap together until the left-most rotor character is correct.
Then the mechanism advances by 1 rotor to the right...
...REPEAT this rotor procedure until the whole line is updated
...REPEAT this line procedure from top to bottom until the whole display is updated
Example
Consider a flap display with 3 rotors and one 1 line which currently spells CAT

Step 1 (current rotor is 1)
Flap x 1
Now line says DBU
Step 2 (current rotor is 2)
Flap x 13
Now line says DO)
Step 3 (current rotor is 3)
Flap x 27
Now line says DOG
This can be represented as

lines  // array of strings. Each string is a display line of the initial configuration
rotors // array of array-of-rotor-values. Each array-of-rotor-values is applied to the corresponding display line
result // array of strings. Each string is a display line of the final configuration
e.g.


*/

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ?!@#&()|<>.:=-+*/0123456789'

const lines = ["HELLO "]
const rotors = [[15,49,50,48,43,13]]
const result = ["World!"]
console.log(ALPHABET.length)
// console.log(ALPHABET[ALPHABET.indexOf('C')])
console.log( ALPHABET[1] )
const flapDisplay = (arr) => {

}