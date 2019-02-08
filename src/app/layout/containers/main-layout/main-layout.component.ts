import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  leftSideBar$: Observable<boolean>;

  constructor(private store: Store<fromStore.RouterStateUrl>) {}

  ngOnInit() {
    this.leftSideBar$ = this.store.select(fromStore.getRouterLeftSideBar);
  }
}
