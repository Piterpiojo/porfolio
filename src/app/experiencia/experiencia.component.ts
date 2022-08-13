import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { experienciaI } from '../modelo/experienciaI';


import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
formEditar= new FormGroup({
  puesto: new FormControl ('', Validators.required)
})

  constructor(private datosPorfolio:PortfolioService) {

  }


  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.miPorfolio = data.lexp;

    })
  }

edit(id:number,form:any){
this.datosPorfolio.editarExp(id,form).subscribe(data=>{
  console.log(data);
})

}

delete(id:number){
  console.log("vas a eliminar " + id);
  this.datosPorfolio.eliminarExp(id).subscribe(data =>{
    console.log(data);

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

});

}
}
