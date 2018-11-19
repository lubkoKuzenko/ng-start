import {
  AuthorizationActions,
  AuthorizationActionTypes
} from './authorization.actions';
import { AppState } from '../core/core.state';

export interface AuthState {
  login: string;
  permission: string;
}

export const initialState: AuthState = {
  login: '',
  permission: 'VIEWER'
};

export interface State extends AppState {
  authorization: AuthState;
}

const newState = (state, newData) => Object.assign({}, state, newData);

export function AuthorizationReducer(
  state = initialState,
  action: AuthorizationActions
): AuthState {
  switch (action.type) {
    case AuthorizationActionTypes.LOGIN:
      return state;

    case AuthorizationActionTypes.LOGIN_SUCCESS:
      return newState(state, action.payload);

    case AuthorizationActionTypes.LOGIN_ERROR:
      return newState(state, action.payload);

    default:
      return state;
  }
}
