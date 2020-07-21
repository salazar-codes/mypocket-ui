export class TipoMovimiento {

    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public icono: string,
        public ingreso: boolean,
    ){}

}