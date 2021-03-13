import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AppState } from "../../reducers";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { isLoggedIn } from '../ngrx-store-data/auth.selector';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AppState>,
                private router: Router){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> {
        return this.store
            .pipe(
                select(isLoggedIn),
                tap(loggedIn => {
                    if(!loggedIn){
                        this.router.navigateByUrl('/login')
                    }
                })
            )
    }
}