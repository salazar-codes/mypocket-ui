
export class Usuario{
    constructor(
        public username:string,
        public nombres:string,
        public apellidos:string,
        public email:string,
        public enabled?:string,
        public createAt?:string,
        public password?:string,
    ){}
}