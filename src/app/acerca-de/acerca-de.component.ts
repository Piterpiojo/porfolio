import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  nombre = "Aldo Delgado";
  titulo ="Full Stack Developer Jr";
  descipcion= "Este texto es un ejemplo de como quedaria el espacio de descripcion, se supone que las descripciones son piolitas, asi que rescatate barrilete";
}
