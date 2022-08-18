export class NuevoUsuario{
  email!: string;
  password!: string;
  authorities!: string[];

constructor(email:string, password:string){
  this.email=email;
  this.password = password;
}
}
