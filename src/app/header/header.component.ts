
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { TokenService } from '../servicios/token.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
logueado:boolean=false;

  constructor(private ruta:Router, private tokenService:TokenService) {
  }

  ngOnInit(): void {
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
