import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBreed } from '../interfaces/IBreed';
import { IImageBreed } from '../interfaces/IImageBreed';
import { effect  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiUrl;
  limit = 10;
  constructor() { }
  
  getListBreeds(lastPage = 0):Observable<IBreed[]> {
    const params = `?limit=${this.limit}&page=${lastPage}`;
    return this.http.get<IBreed[]>(`${this.baseUrl}/breeds${params}`);
  }

  getBredById(id:string):Observable<IBreed> {
    return this.http.get<IBreed>(`${this.baseUrl}/breeds/${id}`);
  }

  searchBreed(q:string):Observable<IBreed[]> {
    return this.http.get<IBreed[]>(`${this.baseUrl}/breeds/search?q=${q}`);
  }

  getImagenBreed(imagen_ref:string):Observable<IImageBreed> {
    return this.http.get<IImageBreed>(`${this.baseUrl}/images/${imagen_ref}`);
  }



}
