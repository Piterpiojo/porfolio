import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { experienciaI } from '../modelo/experienciaI';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
url:string= "http://localhost:8080/";
  constructor(private http:HttpClient) { }


obtenerDatos():Observable<any>{
  return this.http.get<any>(this.url+ "persona/obtenertodo/1");
}

agregarExp(exp:any):Observable<any>{
  return this.http.post<any>(this.url + "experiencia/crear", exp);
}

eliminarExp(id:number):Observable<any>{
  return this.http.delete(this.url + "experiencia/eliminar/"+ id);
}

editarExp(id:number,form: any):Observable<any>{
  let path = this.url + "experiencia/editar";
  return this.http.put<any>(path,form);
}
}
