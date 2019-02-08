import { createSelector } from '@ngrx/store';

import * as fromRoot from '../reducers';

export const getRouterData = createSelector(
  fromRoot.getRouterState,
  (router): fromRoot.RouterData => {
    return router.state && router.state.data;
  }
);

export const getRouterLeftSideBar = createSelector(
  getRouterData,
  (data: fromRoot.RouterData): boolean => {
    return data.leftSideBar;
  }
);
