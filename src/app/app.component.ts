import { Component, inject } from '@angular/core';
import { SeriesService } from './services/series.service';
import { SeriesModel } from './models/series.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  seriesService: SeriesService = inject(SeriesService);
  authService: AuthService = inject(AuthService);
  seriesSelected: SeriesModel = {
    name: 'no series selected',
    id: -1,
    description: 'none',
  };
  title = 'series-minder';

  constructor() {
    console.log('INIT SUBSCRIPTIOS SERIES SERVICCE FROM APP_COMPONENT');
    this.seriesService.seriesSelected$.subscribe({
      next: (value: SeriesModel) => {
        console.log('APP_COMPONENT SERIES_SELECTED =>', value);
        this.seriesSelected = value;
      },
    });

    this.authService.user$.subscribe({
      next: (value: string) => {
        console.log('AUTH SERVICE USER DATA =>', value);
      },
    });
  }
}
