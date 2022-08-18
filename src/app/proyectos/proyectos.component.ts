import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proyecto } from '../modelo/Proyecto';
import { PortfolioService } from '../servicios/portfolio.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

persona_id:number=-1;
miPortfolio:any;
mostrar:number= -1;
logueado:boolean=false;
@Output()
editoPro: EventEmitter<number> = new EventEmitter<number>();


formEditar=new FormGroup({
  titulo: new FormControl('',Validators.required),
  descripcion: new FormControl('',Validators.required),
  img: new FormControl(''),
  link: new FormControl('')
})

  constructor(private datosPorfolio:PortfolioService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.persona_id = data.persona_id;
      this.miPortfolio=data.lpro;
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


agregar(form:Proyecto){
form.persona_id= this.persona_id;
this.datosPorfolio.agregarPro(form).subscribe(data =>{
  console.log(data);
});
this.editoPro.emit();
}

eliminar(id:number){
  this.datosPorfolio.eliminarPro(id).subscribe(data =>{
    console.log(data);
  })
  this.editoPro.emit();
}

edit(form:Proyecto,id:number){
form.persona_id= this.persona_id;
this.datosPorfolio.editarPro(form,id).subscribe(data =>{
  console.log(data);
})
this.editoPro.emit();
}
}
