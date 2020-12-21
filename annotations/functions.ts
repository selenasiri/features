const add = ( a: number, b: number ): number => {   // the function will return a number 
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
  console.log( message );   // no return statement inside here; : void means there's no return value, though it can technically return null or undefined
}

const throwError = ( message: string ): string => {   // :never - only used when we never expect a return value
  if ( !message ) {
    throw new Error( message );
  }

  return message;
};