import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaTelephoneComponent } from './components/telephone/list-telephone/list-telephone.component';
import { TelephoneComponent } from './telephone.component';

const routes: Routes = [
  { path: '', redirectTo: '/phones/list', pathMatch: 'full' },
  {
    path: '',
    component: TelephoneComponent,
    children: [{ path: 'list', component: ListaTelephoneComponent }],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelephoneRoutingModule {}
