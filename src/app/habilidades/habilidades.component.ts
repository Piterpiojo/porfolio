import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  habilidad="Programación";
  Porcentaje="75%";
}
