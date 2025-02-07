import Cl_empresa from "./Cl_empresa.js";
import Cl_personal from "./Cl_personal.js";

let personal1 = new Cl_personal("Juan", "Obrero", 100);
let personal2 = new Cl_personal("Ana", "Obrero", 120);
let personal3 = new Cl_personal("Lin", "Administrativo", 200);
let personal4 = new Cl_personal("Mary", "Obrero", 50);
let personal5 = new Cl_personal("Carlos", "Administrativo", 150);

let empresa = new Cl_empresa();

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5)

alert("El total de aumento es: $" + empresa.totalMontoAdic());