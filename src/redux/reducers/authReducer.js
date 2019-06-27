import initialState from '../initialState';
import injectReducer from '../injectReducer';

import { AUTH_SIGN_IN, AUTH_REGISTER, AUTH_GET_ERROR } from '../actionTypes';

const handlers = {
  [AUTH_REGISTER]: state => ({
    ...state
  }),
  [AUTH_SIGN_IN]: (state, { payload }) => ({
    ...state,
    auth: payload
  }),
  [AUTH_GET_ERROR]: (state, { error }) => ({
    ...state,
    error
  })
};

export default injectReducer(initialState.authReducer, handlers);
