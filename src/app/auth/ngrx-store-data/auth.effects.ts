import { Injectable } from "@angular/core";
import { Actions, ofType, createEffect } from "@ngrx/effects";
import { AuthAction } from "./auth-action-types";
import { tap } from "rxjs/operators";
import { Router } from "../../common";

@Injectable()
export class AuthEffects {
    constructor(private actions$: Actions, private router:Router){

    }
    login$ = createEffect( () => 
        this.actions$
            .pipe(
                ofType(AuthAction.login),
                tap(action => localStorage.setItem('user', JSON.stringify(action.user))),                
            ),{ dispatch:false }
    );

    logout$ = createEffect( ()=>
        this.actions$
            .pipe(
                ofType(AuthAction.logout),
                tap(action => {
                    localStorage.removeItem('user');
                    this.router.navigateByUrl
                    })
            ),{ dispatch: false } 
    );

}