import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriesListComponent } from './pages/series-list/series-list.component';
import { SeriesDetailComponent } from './pages/series-detail/series-detail.component';
import { authGuard } from './guards/auth.guard';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'series-list',
    component: SeriesListComponent,
    canActivate: [authGuard],
  },
  {
    path: 'series-detail/:id',
    component: SeriesDetailComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
