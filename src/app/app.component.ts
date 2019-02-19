import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromRoot from './store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sideBar$: Observable<boolean>;

  constructor(private store: Store<fromRoot.RouterStateUrl>) {}

  ngOnInit() {
    this.sideBar$ = this.store.select(fromRoot.getRouterSideBar);
  }
}
