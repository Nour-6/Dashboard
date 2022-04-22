import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actualite } from './actualite';



@Injectable({providedIn: 'root'})
export class ActualiteService {


  constructor(private http: HttpClient){}

  public getActualites(): Observable<Actualite[]> {
    return this.http.get<Actualite[]>(`http://localhost:8080/actualite/all`);
  }

  public addActualite(actualite: Actualite): Observable<Actualite> {
    return this.http.post<Actualite>(`http://localhost:8080/actualite/add`, actualite);
  }

  public updateActualite(actualite: Actualite): Observable<Actualite> {
    return this.http.put<Actualite>(`http://localhost:8080/actualite/update`, actualite);
  }

  public deleteActualite(actualiteId: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/actualite/delete/${actualiteId}`);
  }
}
function actualite<T>(arg0: string, actualite: any): Observable<Actualite> {
  throw new Error('Function not implemented.');
}

