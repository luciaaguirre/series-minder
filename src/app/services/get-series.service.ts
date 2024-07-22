import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TVSeriesService {
  private httpClient: HttpClient = inject(HttpClient);

  constructor() {}
}
getTVsSeries(page: string) :Observable<Series[]> {
    return this.httpClient.get
}


//Tipado

 export interface Response {
    info: any;
    results: any 
 }

 export interface Series {
    title: string;
    year: number;
    
 }