import {Vehicle} from "./Vehicle";

export class Car implements Vehicle{
  hasMotor:boolean;
  type: string;
  maxSpeed: number;
  isMoving: boolean;
  year: number;
  doors: number;
  automatic:boolean;
  horsePower: number;

  constructor(hasMotor: boolean, type: string, maxSpeed: number, isMoving: boolean, year:number, doors:number, automatic:boolean, horsePower: number){
    this.hasMotor = hasMotor;
    this.type = type;
    this.maxSpeed = maxSpeed;
    this.isMoving = isMoving;
    this.year = year;
    this.doors = doors;
    this.automatic = automatic;
    this.horsePower = horsePower;
  }

  move(){
    console.log('El Coche se mueve');
  }
  listProperties(){
      console.log(this.hasMotor,
      this.type,
      this.maxSpeed,
      this.isMoving,
      this.year,
      this.doors,
      this.automatic,
      this.horsePower);
  }
  turnOnAC(){
    console.log('El A/C esta Encendido');
  }
  turnOnGPS(){
    console.log('El GPS esta encendido');
  }

}
  



