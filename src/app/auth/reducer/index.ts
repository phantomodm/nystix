import { 
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createReducer,
    createSelector,
    MetaReducer,
    on } from "@ngrx/store";
import { User } from "@src/app/auth/model/user.model";
import { AuthAction } from "../ngrx-store-data/auth-action-types";


export interface AuthState {
    user: User
}

export const initialAuthState: AuthState = {
    user:undefined
}

export const authReducer = createReducer(
    initialAuthState,
    on(AuthAction.login, (state,action)=>{
        return {
            user: action.user
        }
    }),
    
    on(AuthAction.logout, (state,action)=>{
        return {
            user: undefined
        }
    })
)