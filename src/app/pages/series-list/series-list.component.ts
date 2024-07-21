import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SeriesModel } from 'src/app/models/series.model';
import { Subject, takeUntil } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {
  UserInfoResponse,
  UserInfoService,
} from 'src/app/services/user-info.service';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
})
export class SeriesListComponent implements OnInit, OnDestroy {
  private seriesService: SeriesService = inject(SeriesService);
  private userInfoService: UserInfoService = inject(UserInfoService);
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

  changeSelectedSeries(series: SeriesModel): void {
    this.seriesService.setSeries(series);
    this.userInfoService.getUserInfo('1').subscribe({
      next: (res: string) => {
        console.log(res);
      },
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
