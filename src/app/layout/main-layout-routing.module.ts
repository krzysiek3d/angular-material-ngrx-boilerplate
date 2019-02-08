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
    component: fromContainers.MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: '../dashboard/dashboard.module#DashboardModule',
        data: { leftSideBar: true }
      },
      {
        path: 'login',
        loadChildren: '../login/login.module#LoginModule',
        data: { leftSideBar: false }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES), SharedModule],
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {}
