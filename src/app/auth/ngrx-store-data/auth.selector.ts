import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from '@src/app/auth/reducer/index';

export const selectAuthState = createFeatureSelector<AuthState>("auth");
export const isLoggedIn = createSelector(selectAuthState, auth => !!auth.user)
export const isLoggedOut = createSelector(isLoggedIn, loggedIn => !loggedIn)