import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  proyecto="Porfolio Web"
  fecha="2022"
  descripcion="Porfolio Web creado como proyecto final para Argentina Programa"


}
