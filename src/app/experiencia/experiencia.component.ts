import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
form:FormGroup;

  constructor(private datosPorfolio:PortfolioService, private formBuilder:FormBuilder) {
    this.form=this.formBuilder.group(
      {
        puesto:[],
        empresa:[],
        desde:[],
        hasta:[],
        logo:[],
      }

    )
  }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio = data.lexp;

    })
  }

edit(id:number,persona_id:number, form:any){
  console.log("clickeaste editar el " + id + " persona "+ persona_id + form);
  JSON.stringify(form);

}

delete(id:number){
  console.log("vas a eliminar " + id);
  this.datosPorfolio.eliminarExp(id).subscribe(data =>{
    console.log(data);
    location.reload();
  })
}

agregar(puesto:string,empresa:string,desde:string,hasta:string,logo:string,persona_id:string){
  const exp ={empresa:"hola",
  puesto:"desde",
  desde:"hasta",
  hasta:"logo",
  logo:"persona",
  persona_id:"1"}

this.datosPorfolio.agregarExp(exp).subscribe(data =>{
  console.log(data);
  window.location.reload();
});

}
}
