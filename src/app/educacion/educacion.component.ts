import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  titulo="Profesor de eduacion superior en informatica";
  anioEgreso="2021";
  institucion="Dr. Joaquín V. Gonzalez";
}
