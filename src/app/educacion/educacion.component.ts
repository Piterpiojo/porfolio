import { NumberSymbol } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudios } from '../modelo/Estudios';
import { PortfolioService } from '../servicios/portfolio.service';
import { TokenService } from '../servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
miPorfolio:any;
persona_id:number=-1;
mostrar:number=-1;
logueado:boolean= false;

@Output()
editoEdu: EventEmitter<number> = new EventEmitter<number>();



formEditar= new FormGroup({
  institucion: new FormControl ('', Validators.required),
  carrera: new FormControl ('', Validators.required),
  desde: new FormControl ('',Validators.required),
  hasta: new FormControl ('',Validators.required),
  logo: new FormControl (''),
});

  constructor(private datosPorfolio:PortfolioService, private tokenService:TokenService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.persona_id = data.persona_id;
      console.log(this.persona_id);
      this.miPorfolio = data.ledu;

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

  agregar(form:Estudios){
    form.persona_id = this.persona_id;

    this.datosPorfolio.agregarEstudio(form).subscribe(data =>{
      console.log(data);

    });
    this.editoEdu.emit();
  }

  editar(id:number,form:Estudios){
    form.persona_id = this.persona_id;
    this.datosPorfolio.editarEstudio(form,id).subscribe(data =>{
      console.log(data);
    })
    this.editoEdu.emit();
  }

  eliminar(id:number){
    this.datosPorfolio.eliminarEstudio(id).subscribe(data =>{
      console.log(data);
    })
    this.editoEdu.emit();
  }
}
