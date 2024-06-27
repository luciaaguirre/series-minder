import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesListComponent } from './series-list/series-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'series-list',
    component: SeriesListComponent,
  },
  {
    path: 'series-detail/:id',
    component: SeriesDetailComponent,
  },
];

@NgModule({
  declarations: [SeriesDetailComponent, SeriesListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [SeriesDetailComponent, SeriesListComponent],
})
export class PagesModule {}
