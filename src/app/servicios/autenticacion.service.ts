import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtDto } from '../modelo/JwtDto';
import { LoginUsuario } from '../modelo/LoginUsuario';
import { NuevoUsuario } from '../modelo/NuevoUsuario';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  url="https://fierce-cliffs-56094.herokuapp.com/";

  constructor(private http:HttpClient) {}








  crearCuenta(usuario:NuevoUsuario):Observable<any>{
    return this.http.post<any>(this.url+ "auth/nuevo",usuario);
  }

login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.http.post<JwtDto>(this.url +"auth/login", loginUsuario)
  }
}
