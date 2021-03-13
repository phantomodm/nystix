import { RouterModule } from '../common'
import { LoginComponent } from './login/login.component';
import { authReducer } from './reducer';
import { loginRoutes } from './auth.routes';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './ngrx-store-data/auth.effects';

export const AUTH_SHARED_MODULES: any[] = [
    RouterModule.forChild(loginRoutes),
    StoreModule.forFeature('auth',authReducer),
    EffectsModule.forFeature([AuthEffects])
]

export const AUTH_COMPONENT_DECLARATIONS: any[] = [
    LoginComponent
]