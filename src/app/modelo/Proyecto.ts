export class Proyecto{
titulo:string;
descripcion:string;
img:string;
persona_id:number;
link:string;


constructor(titulo:string,
  descripcion:string,
  img:string,
  link:string,
  persona_id:number
  ){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.link = link;
    this.img = img;
    this.persona_id = persona_id;
  }
}
