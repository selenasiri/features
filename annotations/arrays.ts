const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference when extracting values
// const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incomptible values
carMakers.push(); // Can't put 100 if TS is expecting a string

// Help with 'map'
carMakers.map( ( car: string ): string => {
  return car.toUpperCase();
} );

// Flexible types
const importantDates: ( Date | string )[] = [new Date()];  // Array can be either a date or string
importantDates.push( '2030-10-10' );
importantDates.push( new Date() );