import { NgModule, ModuleWithProviders } from '@angular/core';

import {ReactiveFormsModule} from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

import { AUTH_COMPONENT_DECLARATIONS, AUTH_SHARED_MODULES } from './auth.common';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './service/auth.service';

import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        ...AUTH_COMPONENT_DECLARATIONS
    ],
    imports: [ 
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        ...AUTH_SHARED_MODULES ],
    exports: [
        LoginComponent
    ],
    providers: [],
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: [
                AuthGuard,
                AuthService
            ]
        }
    }
}