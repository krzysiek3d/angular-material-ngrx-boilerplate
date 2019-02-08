import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// guards
import * as fromGuards from './guards';

// routes
export const ROUTES: Routes = [
  {
    path: '',
    component: fromContainers.FeaturesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [
    RouterModule,
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class FeaturesRoutingModule {}
