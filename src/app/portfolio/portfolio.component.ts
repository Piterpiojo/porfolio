import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
recargar:number = 0;
recargarEdu:number=0;
recargarExp:number=0;
recargarPro:number=0;
recargarPers:number=0;
  constructor() { }

  ngOnInit(): void {
  }

recibido(num:number){
  this.recargar ++;
}

recibidoEdu(num:number){
  this.recargarEdu ++;
}
recibidoExp(num:number){
  this.recargarExp ++;
}

recibidoPro(num:number){
  this.recargarPro ++;
}
recibidoPers(num:number){
  this.recargarPers ++;
}
}
