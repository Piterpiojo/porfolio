import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

mostrar:number = -1;
miPorfolio:any;

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

editar(){

}

}
