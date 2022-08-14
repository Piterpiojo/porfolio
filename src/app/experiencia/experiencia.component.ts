import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Experiencia} from '../modelo/experiencia';



import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
mostrar:number= -1;
persona_id:number = -1;

formEditar= new FormGroup({
  puesto: new FormControl ('', Validators.required),
  empresa: new FormControl ('', Validators.required),
  desde: new FormControl ('',Validators.required),
  hasta: new FormControl ('',Validators.required),
  logo: new FormControl ('',Validators.required),
})

  constructor(private datosPorfolio:PortfolioService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.persona_id = data.persona_id;
      this.miPorfolio = data.lexp;
    })
  }

  get Desde(){
    return this.formEditar.get('desde')?.value;
  }
  get Puesto(){
    return this.formEditar.get('puesto')?.value;
  }
  get Empresa(){
    return this.formEditar.get('empresa')?.value;
  }
  get Hasta(){
    return this.formEditar.get('hasta')?.value;
  }
  get Logo(){
    return this.formEditar.get('logo')?.value;
  }

funcmostrar(exp:number){
  if (this.mostrar !== exp){
    this.mostrar=exp;
  }else{
    this.mostrar= -1;
  }

}


edit(form:Experiencia,persona:number,Id:number){

  const exp = new Experiencia(this.Empresa,this.Puesto,this.Desde,this.Hasta,this.Logo,persona);
this.datosPorfolio.editarExp(exp,Id).subscribe(data=>{
  console.log(data);
  this.mostrar = -1;

})



}

delete(id:number){

  this.datosPorfolio.eliminarExp(id).subscribe(data =>{

    console.log(data);

  })

}

agregar(form:Experiencia){
  const exp = new Experiencia(this.Empresa,this.Puesto,this.Desde,this.Hasta,this.Logo,this.persona_id);

this.datosPorfolio.agregarExp(exp).subscribe(data =>{
  console.log(data);

});

}
}
