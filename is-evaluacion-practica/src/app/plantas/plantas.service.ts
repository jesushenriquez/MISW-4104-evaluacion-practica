import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from './planta.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlantasService {

  constructor(private http:HttpClient) { }

  /**
   * Traer listado de plantas
   */
  public getAll(): Observable<Planta[]> {
    const url = `https://gist.githubusercontent.com/josejbocanegra/7b71922ee9e2ab407d3210f1e5cb8400/raw/cf1077fa69112bc67ff520dd6517a93afd3dae29/202212_MISW4104_Grupo2.json`;
    return this.http.get<Planta[]>(url);
  }

}
