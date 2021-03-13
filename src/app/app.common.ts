import { RouterModule } from "./common";
import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { EntityDataModule } from '@ngrx/data';
import { entityConfig } from './entity-metadata';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { AppRoutes, guards } from './app.routes';

import { AuthModule } from './auth';

export const SHARED_ROOT_MODULES: any[] = [
    StoreModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    AuthModule,
    StoreModule.forRoot(reducers, {
        metaReducers,
        runtimeChecks: {
          strictStateImmutability: true,
          strictActionImmutability: true
        }
      }),
      StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
      EffectsModule.forRoot([AppEffects]),
      StoreRouterConnectingModule.forRoot({
        stateKey: 'router',
        routerState: RouterState.Minimal
    }),
      EntityDataModule.forRoot(entityConfig),
]

export const COMPONENT_DECLARATIONS: any[] = [
    AppComponent
]

export const PROVIDERS:any[] = {
    ...guards
}