import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtDto } from '../modelo/JwtDto';
import { LoginUsuario } from '../modelo/LoginUsuario';
import { NuevoUsuario } from '../modelo/NuevoUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="http://localhost:8080/auth/login";

  constructor(private http:HttpClient) {}







  iniciarSesion(credenciales:any):Observable<any>
  {
    return this.http.post(this.url,credenciales).pipe(map(data=>{
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      return data;
    }))
  }

  crearCuenta(usuario:NuevoUsuario):Observable<any>{
    return this.http.post<any>(this.url+ "auth/nuevo",usuario);
  }

login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.url, loginUsuario)
  }
}
