import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  puesto="Trabajador";
  empresa="empresa S.A";
  desde="01/01/2000";
  hasta="02/02/2022"
  descripcion="descripcion puesto";


}
