import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PortfolioService } from '../servicios/portfolio.service';
import {Habilidad} from '../modelo/Habilidad';
import { TokenService } from '../servicios/token.service';
import { fromEventPattern } from 'rxjs';






@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
miPortfolio:any;
persona_id:number=-1;
email!:string;
mostrar:number=-1;
logueado:boolean= false;
fueraDeRango=false

@Output()
edito: EventEmitter<number> = new EventEmitter<number>();
recargar:number=0;

formEditar= new FormGroup({
nombre: new FormControl('',Validators.required),
valor:new FormControl(0,Validators.required)
})
  constructor(private datosPorfolio:PortfolioService,private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.persona_id = data.persona_id;
      this.miPortfolio=data.lhabl;
    })

    if(this.tokenService.getToken()){
      this.logueado = true;
    }else{
      this.logueado= false;
    }
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
if(form.valor > 0 && form.valor < 101){
  this.datosPorfolio.agregarHab(form).subscribe(data =>{

  });
  this.edito.emit(this.recargar);
  this.fueraDeRango=false;
}else{
this.fueraDeRango= true;
}

}

eliminar(id:number){
  this.datosPorfolio.eliminarHab(id).subscribe(data =>{
    console.log(data);

  })
  this.edito.emit(this.recargar);
}

editar(form:Habilidad,id:number){
form.persona_id=this.persona_id;
this.datosPorfolio.editarHab(form,id).subscribe(data =>{
  console.log(data);
})
this.mostrar = -1;
this.edito.emit(this.recargar);
}



}
