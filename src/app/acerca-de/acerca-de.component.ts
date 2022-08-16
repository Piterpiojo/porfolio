import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Persona } from '../modelo/persona';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

mostrar:number = -1;
miPorfolio:any;

@Output()
editoPers: EventEmitter<number> = new EventEmitter<number>();

formEditar = new FormGroup({
  nombre: new FormControl(''),
  apellido: new FormControl(''),
  titulo:new FormControl(''),
  descripcion:new FormControl(''),
  foto:new FormControl(''),
  banner:new FormControl('')

})

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      this.miPorfolio = data;
    })
  }

editar(form:Persona){
this.datosPorfolio.editarPers(form,this.miPorfolio.persona_id).subscribe(data=>{
  console.log(data);
})
this.mostrar = -1;
this.editoPers.emit();
}

}
