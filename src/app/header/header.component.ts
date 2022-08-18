import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';
import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logueado:boolean=false;
miPortfolio:any;
  constructor(private ruta:Router, private tokenService:TokenService,private datosPorfolio:PortfolioService) {
  }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio=data;
    })



    if(this.tokenService.getToken()){
      this.logueado = true;
    }else{
      this.logueado= false;
    }
  }


  logout(){
    window.location.reload();
    this.tokenService.logOut();
  }
ingresar(){
  this.ruta.navigate(['/iniciar-sesion'])
}
}
