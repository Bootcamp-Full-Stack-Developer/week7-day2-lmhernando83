## Typescript

En este ejercicio vamos a practicar todo lo aprendido referente a TypeScript. Dado un modelo de datos y unas especificaciones, debes definir
las interfaces y clases necesarias para desarrollar y cumplir las especificaciones de dicho modelo.

Sabemos que un vehiculo es un Aparato con o sin motor que se mueve sobre el suelo, en el agua o el aire y sirve para transportar cosas o personas,
especialmente el de motor que circula por tierra.

Partiendo de esta definición, podríamos decir, que una interfaz o clase que represente un vehiculo podría tener estas propiedades y métodos:

 - hasMotor: Propiedad booleana que indica si el vehiculo tiene o no motor.
 - type: Propiedad que indica el tipo (terrestre, maritimo...).
 - maxSpeed: Propiedad numérica que indica la velocidad máxima.
 - isMoving: Indica si esta o no en movimiento.
 - year: Indica el año de fabricación.
 - move():void: Método que inicia el movimiento del vehículo.
 - listProperties: Método que pinta por consola las propiedades del Vehiculo.

 
Dentro de los diferentes tipos de Vehiculos que existen, encontramos, por ejemplo, los coches y las motos. Ambos tienen muchas propiedades comunes a las ya definidas en el Vehiculo, pero ademas tienen propiedades y funcionalidades
propias y que pueden o no compartir con otros tipos de Vehiculos. Por ejemplo, en el caso del coche, encontramos las siguientes: 

 - doors: Propiedad numérica que indica el nº de puertas.
 - automatic: Propiedad boleana que indica si el coche es automático o no.
 - horsePower: Indica el número de caballos que tiene el coche.
 - turnOnAC: Método que enciende el aire acondicionado.
 - turnOnGPS: Método que enciende el gps.
 
Por otro lado, como propiedades y métodos concretos de las motos encontramos los siguientes:
 
 - cc: Indica el número de cilindrada de la moto.
 - hasGears: Boleano que indica si la moto tiene marchas o no.
 - upGear: Método que sube una marcha.
 - downGear: Método que baja una marcha.
 
Además, dentro de los dos tipos de Vehiculos, podemos encontrar modelos más concretos. Por ejemplo, 
en el caso de los coches hemos creado TeslaModel y SeatModel, ambos son coches, pero se comportan de manera diferente en ciertos aspectos. 

TeslaModel, por ejemplo tiene las siguientes caracteristicas:

 - Siempre tienen 3 puertas.
 - Es automático.
 - Tiene 200 caballos.
 - Puede tanto encender el GPS como el AC.
 
Por otro lado un SeatModel tiene las siguientes caracteristicas:
 
 - Siempre tiene 5 puertas.
 - Puede ser automático o manual.
 - Tiene 120 caballos.
 - Puede encender el AC pero no el GPS ya que no dispone de este sistema. 
 
Al igual que con los coches, tenemos también dos modelos concretos de moto, Yamaha y MochilloCarmena. Ambos tienen sus caracteristicas propias,
que son las siguientes:

MochilloCarmena:

   - La cilindrada es 49cc.
   - No tiene marchas.
   
Yamaha: 
   
   - La cilindrada es 500cc.
   - Si tiene marchas.   