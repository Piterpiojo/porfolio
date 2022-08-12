import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

editarExp(id:number, form:any):Observable<any>{
  return this.http.post<any>(this.url + "experiencia/editar/" + id,form);
}
}
