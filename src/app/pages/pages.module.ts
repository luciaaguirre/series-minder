import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeriesDetailComponent } from './series-detail/series-detail.component';
import { SeriesListComponent } from './series-list/series-list.component';



@NgModule({
  declarations: [
    SeriesDetailComponent,
    SeriesListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
