'use strict';

class Vehicle {
  constructor(manufacturerName, modelName, manufactureYear, vehicleMileage) {
    this.manufacturer = manufacturerName;
    this.model = modelName;
    this.year = manufactureYear;
    this.mileage = vehicleMileage;
  }

  start() {
    return 'Vehicle can start.';
  }

  move() {
    return 'Vehicle can move.';
  }

  stop() {
    return 'Vehicle can stop.';
  }

  controlType() {
    return `We drive vehicles`;
  }
}

// let testVehicle = new Vehicle('Mercedes', 'G Class', 2024, 0);
// console.log(testVehicle, '\n', testVehicle.start());

class Motorcycle extends Vehicle {
  constructor(
    manufacturer,
    model,
    year,
    mileage,
    motorcycleType,
    amountOfCC,
    exhaustType
  ) {
    super(manufacturer, year, mileage);
    this.type = motorcycleType;
    this.ccValue = amountOfCC;
    this.exhaustManufacturer = exhaustType;
  }

  controlType() {
    return `We ride motorcycles`;
  }
}

let motorcycleOne = new Motorcycle(
  'Yamaha',
  'R1',
  2022,
  0,
  'Super Sport',
  998,
  'Akrapovic'
);

console.log(motorcycleOne, '\n', motorcycleOne.controlType());
