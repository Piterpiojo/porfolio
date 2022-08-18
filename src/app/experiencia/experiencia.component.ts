import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


import { Experiencia} from '../modelo/experiencia';



import { PortfolioService } from '../servicios/portfolio.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
miPorfolio:any;
mostrar:number= -1;
logueado:boolean= false;
@Output()
editoExp: EventEmitter<number> = new EventEmitter<number>();


persona_id:number = -1;

formEditar= new FormGroup({
  puesto: new FormControl ('', Validators.required),
  empresa: new FormControl ('', Validators.required),
  desde: new FormControl ('',Validators.required),
  hasta: new FormControl ('',Validators.required),
  logo: new FormControl ('',Validators.required),
})

  constructor(private datosPorfolio:PortfolioService, private tokenService:TokenService) {

  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.persona_id = data.persona_id;
      this.miPorfolio = data.lexp;
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


edit(form:Experiencia,persona:number,Id:number){
form.persona_id = persona;
this.datosPorfolio.editarExp(form,Id).subscribe(data=>{
  console.log(data);
  this.mostrar = -1;

})
this.editoExp.emit();


}

delete(id:number){

  this.datosPorfolio.eliminarExp(id).subscribe(data =>{

    console.log(data);

  })
  this.editoExp.emit();
}

agregar(form:Experiencia){
form.persona_id=this.persona_id;

this.datosPorfolio.agregarExp(form).subscribe(data =>{
  console.log(data);

});
this.editoExp.emit();
}
}
