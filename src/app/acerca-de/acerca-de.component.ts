import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
miPorfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data=>{
      console.log("datos personales" + JSON.stringify(data));
     // this.miPorfolio=data[0];
    })
  }
  nombre = "Aldo Delgado";
  titulo ="Full Stack Developer Jr";
  descipcion= "Este texto";
}
