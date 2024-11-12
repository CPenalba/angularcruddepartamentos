import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Departamento } from '../models/departamento';

@Injectable()
export class ServiceDepatamentos {
  constructor(private _http: HttpClient) {}

  getDepartamentos(): Observable<any> {
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.get(url);
  }

  //voy a recibir directamente el objeto en el metodo de insertar
  insertDepartamento(departamento: Departamento): Observable<any> {
    //esto es como jquery convertir un objeto a json
    let json = JSON.stringify(departamento);
    //debemos indicar en la peticion que tipo de formato tiene el objeto a enviar
    let header = new HttpHeaders();
    header = header.set('Content-type', 'application/json');
    let request = 'api/departamentos';
    let url = environment.urlApiDepartamentos + request;
    return this._http.post(url, json, { headers: header });
  }

  findDepartamento(idDepartamento: string): Observable<any> {
    let request = 'api/departamentos/' + idDepartamento;
    let url = environment.urlApiDepartamentos + request;
    return this._http.get(url);
  }
}
