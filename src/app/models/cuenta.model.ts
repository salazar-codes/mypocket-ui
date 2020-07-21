import { TipoCuenta } from "./tipo-cuenta.model";

export class Cuenta {

    constructor(
        public id: number,
    	public nombre: string,
    	public descripcion: string,
    	public monto: number,
        public color: string,
        public createAt: Date,
        public tipoCuenta: TipoCuenta,
    ){}

}