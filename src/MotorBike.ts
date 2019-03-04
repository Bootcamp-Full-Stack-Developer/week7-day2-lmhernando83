import {Vehicle} from "./Vehicle";

export class MotorBike implements Vehicle{
  hasMotor:boolean;
  type: string;
  maxSpeed: number;
  isMoving: boolean;
  year: number;
  cc: number;
  hasGears:boolean;

  constructor(hasMotor: boolean, type: string, maxSpeed: number, isMoving: boolean, year:number,cc:number, hasGears:boolean){
    this.hasMotor = hasMotor;
    this.type = type;
    this.maxSpeed = maxSpeed;
    this.isMoving = isMoving;
    this.year = year;
    this.cc = cc;
    this.hasGears = hasGears;
  }

  move(){
    console.log('La Moto se mueve');
  }

  listProperties(){
    console.log(this.hasMotor,
    this.type,
    this.maxSpeed,
    this.isMoving,
    this.year,
    this.cc,
    this.hasGears);
  }

  upGear(){
    console.log('La Moto sube una marcha');
  };

  downGear(){
    console.log('La Moto baja una marcha');
  };
}