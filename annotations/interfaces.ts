interface Reportable {  // generic looking interface used to call oldCivic and drink later
  // name: string;
  // year: number;
  // broken: boolean;
  summary(): string;  // TS will just check for this property to see if oldCivic is a vehicle. Extra properties (name, year, broken) dont invalidate it being a vehicle
};

const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`;
  }
};

const drink2 = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
  summary(): string {   // because this also has summary(): string , it is Reportable and can be used at the bottom of this code
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

const printSummary = ( item: Reportable ): void => {
  // ^Changed from 'printVehicle' and 'vehicle' since it won't include descriptions of the vehicle (name, year, broken)
  console.log( item.summary() )
  // console.log( `Name: ${vehicle.name}` );
  // console.log( `Year: ${vehicle.year}` );
  // console.log( `Broken: ${vehicle.broken}` );
}

printSummary( oldCivic );
printSummary( drink2 );
// $ ts-node interfaces.ts
