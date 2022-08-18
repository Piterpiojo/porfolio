export class Persona{
nombre:string;
apellido:string;
foto:string;
descripcion:string;
banner:string;
titulo:string;
email:string;



constructor(nombre:string,
  Apellido:string,
  foto:string,
  descripcion:string,
  banner:string,
  titulo:string, email:string){

  this.nombre = nombre;
  this.apellido = Apellido;
  this.foto = foto;
  this.descripcion = descripcion;
  this.banner = banner;
  this.titulo = titulo;
  this.email=email;
}
}
