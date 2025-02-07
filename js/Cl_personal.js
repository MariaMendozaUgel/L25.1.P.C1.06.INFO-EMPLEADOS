export default class Cl_personal {
    constructor(nombre, tipoPersonal, Sueldo) {
        this.nombre = nombre;
        this.tipoPersonal = tipoPersonal;
        this.Sueldo = Sueldo;
    }
    set Sueldo(Sueldo) {
        this._Sueldo = +Sueldo;
    }
    get Sueldo() {
        return this._Sueldo;
    }

    set tipoPersonal(tipoPersonal) {
        this._tipoPersonal = tipoPersonal;
    }
    get tipoPersonal() {
        return this._tipoPersonal;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get nombre() {
        return this._nombre;
    }

    aumentoSueldo() {
        if (this.tipoPersonal == "Obrero") 
            { return this.Sueldo * 0.2; }
        if (this.tipoPersonal == "Administrativo") 
            { return this.Sueldo * 0.1; }
}

}       