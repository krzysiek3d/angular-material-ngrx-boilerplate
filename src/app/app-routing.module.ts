import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// modules
import { SharedModule } from './shared/shared.module';

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
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    data: { sideBar: true }
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule',
    data: { sideBar: false }
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forRoot(ROUTES)],
  providers: [...fromGuards.guards],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [
    RouterModule,
    SharedModule,
    ...fromContainers.containers,
    ...fromComponents.components
  ]
})
export class AppRoutingModule {}
