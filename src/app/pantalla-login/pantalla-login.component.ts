import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-pantalla-login',
  templateUrl: './pantalla-login.component.html',
  styleUrls: ['./pantalla-login.component.css']
})
export class PantallaLoginComponent implements OnInit {
  form:FormGroup;
  miPortfolio:any;
  formCrear= new FormGroup({
    nombre: new FormControl ('', Validators.required),
    apellido: new FormControl ('', Validators.required),
    titulo: new FormControl ('',Validators.required),
    descripcion: new FormControl ('',Validators.required),
    foto: new FormControl ('',Validators.required),
    banner: new FormControl ('',Validators.required)
  });

  constructor(private formBuilder:FormBuilder, private autenticacionService:AutenticacionService, private ruta:Router) {
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]],
        deviceInfo:this.formBuilder.group({
          deviceId:["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificacionToken:["67655757eececc34"]
        })
      }

    )
  }

  ngOnInit(): void {
  }
  error = false;
  muestraLogin=false;
  mostrar(){
    this.muestraLogin=true;
  }


  intentarLog(){
    //
    if((this.form.get("email")?.value == "aldo@aldo.com") && (this.form.get("password")?.value == "12345678"))
    {
      this.ruta.navigate(['/portfolio']);
    }
    else
    {
      console.log("error");
    }
  }

  get Email(){
    return this.form.get("email");
  }
  get Password(){
    return this.form.get("password");
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.iniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data));
    })
  }
}
