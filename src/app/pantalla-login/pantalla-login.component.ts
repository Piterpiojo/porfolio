import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Persona } from '../modelo/persona';
import { LoginUsuario} from '../modelo/LoginUsuario';

import { AutenticacionService } from '../servicios/autenticacion.service';
import { PortfolioService } from '../servicios/portfolio.service';
import { NuevoUsuario } from '../modelo/NuevoUsuario';
import { TokenService } from '../servicios/token.service';
@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {
  form:FormGroup;

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  email!: string;
  password! : string;
  roles: string[] = [];
  errMsj!: string;

  formVer= new FormGroup({
    emailVer: new FormControl('')
  })

  formCrear= new FormGroup({
    nombre: new FormControl ('', Validators.required),
    apellido: new FormControl ('', Validators.required),
    titulo: new FormControl ('',Validators.required),
    descripcion: new FormControl (''),
    foto: new FormControl (''),
    banner: new FormControl (''),
    email:new FormControl('',Validators.required),
    password: new FormControl('',Validators.minLength(8))
  });

  constructor(private formBuilder:FormBuilder,private tokenService:TokenService, private autenticacionService:AutenticacionService, private ruta:Router, private datosPorfolio:PortfolioService) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]//,

      }

    )

  }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }

  }







  get Email(){
    return this.form.get("email");
  }
  get Password(){
    return this.form.get("password");
  }

  get contrasenia(){
    return this.formCrear.get("password")
  }




  ver(){
    this.ruta.navigate(['/portfolio']);
    this.datosPorfolio.email= "aldo@aldo.com"
  }

  onLogin(form:any): void{
    this.loginUsuario = new LoginUsuario(form.email, form.password);
    this.autenticacionService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.email);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.ruta.navigate(['/portfolio'])
        this.datosPorfolio.email=form.email;
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
      })
  }

  registrar(cuenta:any){
    let usuario=new NuevoUsuario(cuenta.email,cuenta.password);
    let persona= new Persona(cuenta.nombre,cuenta.apellido,cuenta.foto,cuenta.descripcion,cuenta.banner,cuenta.titulo,cuenta.email);
    if(persona.banner === ''){
      persona.banner = "https://static.vecteezy.com/system/resources/previews/000/677/302/non_2x/abstract-technology-banner-background.jpg";
    }
    if(persona.foto ===  ''){
      persona.foto = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
    this.datosPorfolio.agregarPers(persona).subscribe(data=>{
      console.log(data);
    });
    this.autenticacionService.crearCuenta(usuario).subscribe(data=>{
      console.log(data);
    });


  }

  verOtros(form:any){

    this.ruta.navigate(['/portfolio']);
    this.datosPorfolio.email =form.emailVer;
  }

}
