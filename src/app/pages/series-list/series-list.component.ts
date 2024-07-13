import { Component, OnInit, inject } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { SeriesModel } from 'src/app/models/series.model';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss'],
})
export class SeriesListComponent implements OnInit {
  private seriesService: SeriesService = inject(SeriesService);
  private seriesList: SeriesModel[] = [];

  ngOnInit(): void {
    this.seriesService.getAllSeries();
  }
}
