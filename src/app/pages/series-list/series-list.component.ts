import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SeriesModel } from 'src/app/models/series.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
})
export class SeriesListComponent implements OnInit, OnDestroy {
  private seriesService: SeriesService = inject(SeriesService);
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
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
