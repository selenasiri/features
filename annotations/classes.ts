class Vehicle { // Vehicle is the parent class
  public honk(): void {     // Class Method Modifiers: public and private
    console.log( 'beep' );
  }
}

class Car extends Vehicle { // copy & paste methods from Vehicle to class Car
  private drive(): void {   // private - used to restrict access to a function
    console.log( 'vroom' ); // redefines drive(); overrides the child class, returns 'vroom' instead of 'chugga chugga' 
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}
