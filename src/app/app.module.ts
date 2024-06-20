import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { SeriesListComponent } from './pages/series-list/series-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriesDetailComponent,
    SeriesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
