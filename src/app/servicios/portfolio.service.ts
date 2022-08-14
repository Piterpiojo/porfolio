import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../modelo/experiencia';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
url:string= "http://localhost:8080/";
  constructor(private http:HttpClient) { }

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
obtenerDatos():Observable<any>{
  return this.http.get<any>(this.url+ "persona/obtenertodo/1");
}

agregarExp(exp:any):Observable<any>{
  return this.http.post<any>(this.url + "experiencia/crear", exp);
}

eliminarExp(id:number):Observable<any>{
  return this.http.delete(this.url + "experiencia/eliminar/"+ id);
}

editarExp(form: Experiencia, id:any):Observable<Experiencia>{
  let path = this.url + "experiencia/editar/"+id ;
  return this.http.put<Experiencia>(path,form, this.httpOptions);
}
}
