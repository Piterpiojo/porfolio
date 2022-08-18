import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from '../modelo/Estudios';
import { Experiencia } from '../modelo/experiencia';
import { Habilidad } from '../modelo/Habilidad';
import { Persona } from '../modelo/persona';
import { Proyecto } from '../modelo/Proyecto';



@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
url:string= "http://localhost:8080/";
email:string="aldo@aldo.com";

  constructor(private http:HttpClient) { }

httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };



obtenerDatos():Observable<any>{
  return this.http.get<any>(this.url+ "persona/obtenertodo/" + this.email);
}



// ----------------------Experiencias--------------------



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


//----------------estudios--------------------------


agregarEstudio(estudio:any):Observable<any>{
  return this.http.post<any>(this.url+"educacion/crear",estudio)
}

eliminarEstudio(id:number):Observable<any>{
  return this.http.delete(this.url + "educacion/eliminar/" + id);
}

editarEstudio(nEducacion: Estudios, id:number):Observable<Estudios>{
  return this.http.put<Estudios>(this.url + "educacion/editar/" + id,nEducacion);
}


//--------------- habilidades-------------


agregarHab(hab:any):Observable<any>{
  return this.http.post<any>(this.url + "habilidad/crear",hab);
}

editarHab(hab:Habilidad,id:number):Observable<Habilidad>{
  return this.http.put<Habilidad>(this.url + "habilidad/editar/" + id,hab) ;

}

eliminarHab(id:number):Observable<any>{
  return this.http.delete(this.url + "habilidad/eliminar/" + id);
}


// ------------------Proyectos---------------------


agregarPro(pro:Proyecto):Observable<any>{
  return this.http.post<any>(this.url + "proyecto/crear",pro);
}

editarPro(pro:Proyecto,id:number):Observable<Proyecto>{
  return this.http.put<Proyecto>(this.url + "proyecto/editar/" + id,pro);
}

eliminarPro(id:number):Observable<any>{
  return this.http.delete(this.url + "proyecto/eliminar/" + id);
}
//---------------------Persona-----------------------
editarPers(pers:Persona,id:number):Observable<Persona>{
  return this.http.put<Persona>(this.url + "persona/editar/" + id, pers);
}

agregarPers(pers:Persona):Observable<Persona>{
  return this.http.post<any>(this.url + "persona/crear",pers);
}



}

