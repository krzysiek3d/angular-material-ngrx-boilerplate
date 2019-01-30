import { NgModule } from '@angular/core';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeaturesRoutingModule } from './features-routing.module';

// import { reducers, effects } from './store';

@NgModule({
  imports: [
    FeaturesRoutingModule
    // StoreModule.forFeature('featureName', reducers),
    // EffectsModule.forFeature(effects)
  ]
})
export class FeaturesModule {}
