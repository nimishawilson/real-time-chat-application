import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout, registerSuccess } from './auth.actions';

export interface AuthState {
  token: string | null;
  user: any | null;
}

export const initialState: AuthState = {
  token: null,
  user: null,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token, user }) => ({ token, user })),
  on(registerSuccess, (state, { token, user }) => ({ token, user })),
  on(logout, () => initialState)
);
