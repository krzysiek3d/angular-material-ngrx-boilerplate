import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { MainLayoutRoutingModule } from './main-layout-routing.module';

@NgModule({
  imports: [SharedModule, MainLayoutRoutingModule]
})
export class MainLayoutModule {}
