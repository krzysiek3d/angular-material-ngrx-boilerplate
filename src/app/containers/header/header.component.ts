import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ofType, Actions } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  @ViewChild('sideNav') sideNav: MatSidenav;

  sub$ = new Subscription();

  constructor(private router$: Actions) {}

  ngOnInit() {
    this.sub$.add(
      this.router$
        .pipe(
          ofType(ROUTER_NAVIGATED),
          tap(() => this.sideNav.close())
        )
        .subscribe()
    );
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }
}
