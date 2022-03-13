import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelephoneComponent } from './telephone.component';
import { SharedModule } from '../shared/shared.module';
import { TelephoneRoutingModule } from './telephone-routing.module';
import { ListaTelephoneComponent } from './components/telephone/list-telephone/list-telephone.component';

@NgModule({
  declarations: [TelephoneComponent, ListaTelephoneComponent],
  imports: [CommonModule, SharedModule, TelephoneRoutingModule],
})
export class TelephoneModule {}
