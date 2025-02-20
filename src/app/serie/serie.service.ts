import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Serie } from './serie';

@Injectable({
  providedIn: 'root'
})
export class SerieService {

  private apiUrl: string = environment.baseUrl 

  constructor(private http:HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.apiUrl);
  }

}
