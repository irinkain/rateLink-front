import * as actionType from './authTypes'

export const authUserRequest = payload => {
  return {
    type: actionType.AUTH_USER_REQUEST,
    payload
  }
}

export const authUserSuccess = payload => {
  return {
    type: actionType.AUTH_USER_SUCCESS,
    payload
  }
}

export const authUserFailure = error => {
  return {
    type: actionType.AUTH_USER_FAILURE,
    error
  }
}

export const registerUserRequest = payload => {
  return {
    type: actionType.REGISTER_USER_REQUEST,
    payload
  }
}

export const registerUserSuccess = payload => {
  return {
    type: actionType.REGISTER_USER_SUCCESS,
    payload
  }
}

export const registerUserFailure = error => {
  return {
    type: actionType.REGISTER_USER_FAILURE,
    error
  }
}
