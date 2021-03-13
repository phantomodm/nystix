import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AUTH_SHARED_MODULES, AUTH_COMPONENT_DECLARATIONS } from './auth.common';

@NgModule({
    imports:[
        AUTH_SHARED_MODULES
    ],
    declarations:[
        AUTH_COMPONENT_DECLARATIONS
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AuthModule {}