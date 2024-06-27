import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-series-detail',
  templateUrl: './series-detail.component.html',
  styleUrls: ['./series-detail.component.scss'],
})
export class SeriesDetailComponent {
  private route: ActivatedRoute = inject(ActivatedRoute);
  detailId: string = '';

  constructor() {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      this.detailId = idParam;
    }
  }
}
