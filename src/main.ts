
import {Car} from "./Car";
import {MotorBike} from "./MotorBike";

let seatModels = new Car(true, 'seat', 180, true, 2014, 5, true, 120);
console.log(seatModels);
seatModels.move();
seatModels.turnOnAC();

let teslaModels = new Car(true, 'tesla', 200, true, 2001, 3,true, 200);
console.log(teslaModels);
teslaModels.move();
seatModels.turnOnAC();
seatModels.turnOnGPS();

let yamaha = new MotorBike (true, 'yamaha', 200, true, 2001, 500, true);
console.log(yamaha);
yamaha.move();
yamaha.upGear();
yamaha.downGear();

let mochilloCarmena = new MotorBike (true, 'mochilloCarmena', 120, true, 2000, 49, false);
console.log(mochilloCarmena);
mochilloCarmena.move();