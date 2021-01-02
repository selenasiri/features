const add = ( a: number, b: number ): number => {   // Type annotation for functions 
  return a + b;
};

const subtract = ( a: number, b: number ): number => {
  return a - b;
};

function divide( a: number, b: number ): number {
  return a / b;
};

const multiply = function ( a: number, b: number ): number {
  return a * b;
};

const logger = ( message: string ): void => {
  console.log( message );   // no return statement; : void - no return value, though it can technically return null or undefined
}

const throwError = ( message: string ): string => {   // :never - only used when we never expect a return value
  if ( !message ) {
    throw new Error( message );
  }

  return message;
};

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
};

const logWeather = ( { date, weather }: { date: Date, weather: string } ): void => { // Destructuring- replace the variable with the destructuring statement
  console.log( date );
  console.log( weather );
};

logWeather( todaysWeather )