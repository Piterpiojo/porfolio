import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Estudios } from '../modelo/Estudios';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
miPorfolio:any;
persona_id:number=-1;
mostrar:number=-1;
formEditar= new FormGroup({
  institucion: new FormControl ('', Validators.required),
  carrera: new FormControl ('', Validators.required),
  desde: new FormControl ('',Validators.required),
  hasta: new FormControl ('',Validators.required),
  logo: new FormControl ('',Validators.required),
});

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data =>{
      this.persona_id = data.persona_id;
      console.log(this.persona_id);
      this.miPorfolio = data.ledu;

    })
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
  }

  editar(id:number,form:Estudios){
    form.persona_id = this.persona_id;
    this.datosPorfolio.editarEstudio(form,id).subscribe(data =>{
      console.log(data);
    })
    this.mostrar = -1;
  }

  eliminar(id:number){
    this.datosPorfolio.eliminarEstudio(id).subscribe(data =>{
      console.log(data);
    })
  }
}
