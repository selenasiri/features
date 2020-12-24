class Vehicle { // Vehicle is the parent class
  constructor( public color: string ) { }

  protected honk(): void {     // Class Method Modifiers: public and private
    console.log( 'beep' );
  }
}

const vehicle = new Vehicle( 'orange' );
console.log( vehicle.color )

class Car extends Vehicle { // copy & paste methods from Vehicle to class Car
  constructor( public wheels: number, color: string ) {
    super( color );
  }

  private drive(): void {   // private - used to restrict access to a function
    console.log( 'vroom' ); // redefines drive(); overrides the child class, returns 'vroom' instead of 'chugga chugga' 
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car( 4, 'red' ); // When we call car here, it will automatically call the constructor at the top - which is why we need to define color as a string. Must now give (# of wheels, color as a string)
car.startDrivingProcess();

