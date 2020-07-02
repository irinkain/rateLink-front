import { call, put } from 'redux-saga/effects'
import * as authApi from '../../service/authService'
import * as authActions from './actions/authActions'
import { setAuthToken } from '../../utils/auth'

export function* authLoginSaga(action) {
  const { type, payload } = action
  try {
    const { error, message, data } = yield call(authApi.signInUser, payload)
    if (error) {
      yield put(authActions.authUserFailure(error))
    }
    const { jwt } = data
    setAuthToken(jwt)

    yield put(authActions.authUserSuccess(data))
  } catch (error) {
    yield put(authActions.authUserFailure(error))
  }
}

export function* authRegisterSaga(action) {
  const { type, payload } = action
  try {
    const { error, message, data } = yield call(authApi.registerUser, payload)
    if (error) {
      yield put(authActions.registerUserFailure(error))
    }
    const { jwt } = data
    setAuthToken(jwt)

    yield put(authActions.registerUserSuccess(data))
  } catch (error) {
    yield put(authActions.registerUserFailure(error))
  }
}
