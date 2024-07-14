import { Component, inject } from '@angular/core';
import { SeriesService } from './services/series.service';
import { SeriesModel } from './models/series.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  seriesService: SeriesService = inject(SeriesService);
  seriesSelected: SeriesModel = {
    name: 'no tea selected',
    id: -1,
    description: 'none',
  };
  title = 'series-minder';

  constructor() {
    setTimeout(() => {
      console.log('INIT SUBSCRIPTIOS SERIES SERVICCE FROM APP_COMPONENT');
      this.seriesService.seriesSelected$.subscribe({
        next: (value: SeriesModel) => {
          console.log('APP_COMPONENT SERIES_SELECTED =>', value);
          this.seriesSelected = value;
        },
      });
    }, 5000);
  }
}
