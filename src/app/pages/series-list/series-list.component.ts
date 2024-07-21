import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SeriesModel } from 'src/app/models/series.model';
import { Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
})
export class SeriesListComponent implements OnInit, OnDestroy {
  private seriesService: SeriesService = inject(SeriesService);
  private httpClient = inject(HttpClient);
  private destroy$: Subject<void> = new Subject();
  seriesList: SeriesModel[] = [];

  ngOnInit(): void {
    this.seriesService
      .getAllSeries()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (value: SeriesModel[]) => {
          this.seriesList = value;
        },
      });
    this.httpClient
      .put('https://jsonplaceholder.typicode.com/posts/1', {
        id: 1,
        title: 'Pruebas HTTP',
        body: 'Esto es un body',
        userId: 1,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
      });
  }

  changeSelectedSeries(series: SeriesModel): void {
    this.seriesService.setSeries(series);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
