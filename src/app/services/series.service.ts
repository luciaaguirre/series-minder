import { Injectable } from '@angular/core';
import { SeriesModel } from '../models/series.model';
import { Observable, of, delay } from 'rxjs';
import { FAKE_DATA } from './fake-data';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  constructor() {}

  getAllSeries(): Observable<SeriesModel[]> {
    return of<SeriesModel[]>(FAKE_DATA).pipe(delay(100));
  }
}
