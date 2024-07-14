import { Injectable } from '@angular/core';
import { SeriesModel } from '../models/series.model';
import {
  Observable,
  of,
  delay,
  Subject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';
import { FAKE_DATA } from './fake-data';

@Injectable({
  providedIn: 'root',
})
export class SeriesService {
  private _seriesSelected: ReplaySubject<SeriesModel> =
    new ReplaySubject<SeriesModel>();
  seriesSelected$: Observable<SeriesModel> =
    this._seriesSelected.asObservable();

  constructor() {}

  getAllSeries(): Observable<SeriesModel[]> {
    return of<SeriesModel[]>(FAKE_DATA).pipe(delay(100));
  }

  setSeries(series: SeriesModel): void {
    this._seriesSelected.next(series);
  }
}
