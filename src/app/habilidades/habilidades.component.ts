import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../servicios/portfolio.service';
import {Habilidad} from '../modelo/Habilidad';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
miPortfolio:any;
persona_id:number=-1;
mostrar:number=-1;
formEditar= new FormGroup({
nombre: new FormControl('',Validators.required),
valor:new FormControl('',Validators.required)
})
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.persona_id = data.persona_id;
      this.miPortfolio=data.lhabl;

    })
  }



  funcmostrar(exp:number){
    if (this.mostrar !== exp){
      this.mostrar=exp;
    }else{
      this.mostrar= -1;
    }

  }


agregar(form:Habilidad){
form.persona_id=this.persona_id;
this.datosPorfolio.agregarHab(form).subscribe(data =>{
console.log(data);
});
}

eliminar(id:number){
  this.datosPorfolio.eliminarHab(id).subscribe(data =>{
    console.log(data);
  })
}

editar(form:Habilidad,id:number){
form.persona_id=this.persona_id;
this.datosPorfolio.editarHab(form,id).subscribe(data =>{
  console.log(data);
})
this.mostrar = -1;
}


}
