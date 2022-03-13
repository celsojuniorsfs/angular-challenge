import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/homepage/homepage.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'homepage', component: HomePageComponent },
      {
        path: 'phones',
        loadChildren: () =>
          import('./telephone/telephone.module').then((m) => m.TelephoneModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
