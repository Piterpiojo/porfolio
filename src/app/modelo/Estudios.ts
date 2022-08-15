export class Estudios{
institucion:string;
carrera:string;
desde:string;
hasta:string;
Logo:string;
persona_id:number;

constructor(Institucion:string,
  Carrera:string,
  desde:string,
  hasta:string,
  Logo:string,persona_id:number){

  this.institucion = Institucion;
  this.carrera = Carrera;
  this.desde = desde;
  this.hasta = hasta;
  this.Logo = Logo;
  this.persona_id = persona_id;

}


}
