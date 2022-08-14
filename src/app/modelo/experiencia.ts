export class Experiencia{

  empresa:string;
  puesto:string;
  desde:string;
  hasta:string;
  logo:string;
  persona_id:number;




  constructor(empresa:string,puesto:string,desde:string,hasta:string,logo:string, persona_id:number){
    this.puesto=puesto;
    this.empresa=empresa;
    this.desde=desde;
    this.hasta=hasta;
    this.logo=logo;
    this.persona_id= persona_id;
  }

}
