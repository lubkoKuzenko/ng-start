import {
  AuthorizationActions,
  AuthorizationActionTypes
} from './authorization.actions';

export interface State {
  login: string;
  permission: string;
}

export const initialState: State = {
  login: localStorage.getItem('login') || '',
  permission: localStorage.getItem('permission') || 'VIEWER'
};

const newState = (state, newData) => Object.assign({}, state, newData);

export function AuthorizationReducer(
  state = initialState,
  action: AuthorizationActions
): State {
  switch (action.type) {
    case AuthorizationActionTypes.USER_LOGIN:
      return state;

    case AuthorizationActionTypes.USER_LOGIN_SUCCESS:
      return newState(state, action.payload);

    case AuthorizationActionTypes.USER_LOGIN_ERROR:
      return newState(state, action.payload);

    default:
      return state;
  }
}
