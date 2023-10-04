import { AreaCuadrado, PerimetroCuadrado} from "./cuadrado.js";

import { AreaTriangulo, PerimetroTriangulo } from "./triangulo.js";
import { PerimetroPentagono, AreaPentagono } from "./pentagono.js";
import { Reloj } from "./reloj.js";
import { Factorial } from "./factorial.js";

console.log("El perimetro de tu cuadrado es " + PerimetroCuadrado(0));
console.log("El area de tu cuadrado es " + AreaCuadrado(0));
console.log("El perimetro de tu triangulo es " + PerimetroTriangulo(0));
console.log("El area de tu triangulo es " + AreaTriangulo(0,0));
console.log("El perimetro de tu pentagono es " + PerimetroPentagono(0));
console.log("El area de tu poligono es " + AreaPentagono(0,0));
setInterval(function() {console.log(Reloj());},1000)
console.log(Factorial());



