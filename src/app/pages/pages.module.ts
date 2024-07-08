import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [SeriesDetailComponent, SeriesListComponent],
  imports: [CommonModule, MatListModule, MatButtonModule, MatIconModule],
  exports: [SeriesDetailComponent, SeriesListComponent],
})
export class PagesModule {}
