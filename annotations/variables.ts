let apples: number = 5;
let speed: string = 'fast'
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// Built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];  // an array that contains strings
let myNumbers: number[] = [1, 2, 3];  // type of value[]
let truths: boolean[] = [true, true, false];

// Classes
class Car { }
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: ( i: number ) => void = ( i: number ) => {
  console.log( i );
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse( json ); // type annotation i.e. { x: number; y: number } used for type any
console.log( coordinates ); // {x: 10, y: 20};

// 2) When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for ( let i = 0; i < words.length; i++ ) {
  if ( words[i] === 'green' ) {
    foundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false; // without : boolean | number , TS will think this is only a boolean (returning an error)

for ( let i = 0; i < numbers.length; i++ ) {
  if ( numbers[i] > 0 ) {
    numberAboveZero = numbers[i];
  }
}
