class Vehicle { // Vehicle is the parent class
  drive(): void {
    console.log( 'chugga chugga' );
  }

  honk(): void {
    console.log( 'beep' );
  }
}

class Car extends Vehicle { // copy & paste methods from Vehicle to class Car
  drive(): void {
    console.log( 'vroom' ); // redefines drive(); overrides the child class, returns 'vroom' instead of 'chugga chugga' 
  }
}

const car = new Car();
car.drive();
car.honk(); // returns same output as below when we run $ts-node classes.ts

// const vehicle = new Vehicle(); // classes named with a capital letter, instances with a lowercase letter
// vehicle.drive();
// vehicle.honk();