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
    this.detailId = this.route.snapshot.paramMap.get('id')!;
    console.log(this.detailId);
  }
}
