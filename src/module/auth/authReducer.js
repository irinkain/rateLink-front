import { fromJS } from 'immutable'
import * as actionTypes from './actions/authTypes'

const initialState = fromJS({
  isLoading: false,
  isLogined: false,
  login: {
    email: '',
    password: ''
  },
  token: {
    access_token: ''
  },
  user: {},
  isError: false,
  error: {
    message: '',
    statusCode: ''
  }
})

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.AUTH_USER_REQUEST:
      return state.set('login', payload).set('isLoading', true)
    case actionTypes.AUTH_USER_SUCCESS:
      return state
        .setIn(['token', 'access_token'], payload.jwt)
        .set('isLoading', false)
        .set('isLogined', true)
        .set(payload.user)
    case actionTypes.AUTH_USER_FAILURE:
      return state
        .set('isError', true)
        .setIn(['error', 'message'], 'Identifier or password invalid.')
    case actionTypes.REGISTER_USER_REQUEST:
      return state.set('isLoading', true)
    case actionTypes.REGISTER_USER_SUCCESS:
      return state
        .setIn(['token', 'access_token'], payload.jwt)
        .set('isLoading', false)
        .set('isLogined', true)
        .set(payload.user)
    case actionTypes.REGISTER_USER_FAILURE:
      return state
        .set('isError', true)
        .setIn(['error', 'message'], 'Identifier or password invalid.')
    default:
      return state
  }
}
