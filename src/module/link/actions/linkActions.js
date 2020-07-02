import * as actionType from './linkTypes'

export const getAllListRequest = () => {
  return {
    type: actionType.GET_ALL_LIST_REQUEST
  }
}

export const getAllListSuccess = payload => {
  return {
    type: actionType.GET_ALL_LIST_SUCCESS,
    payload
  }
}

export const getAllListFailure = error => {
  return {
    type: actionType.GET_ALL_LIST_FAILURE,
    error
  }
}

export const createLinkRequest = payload => {
  return {
    type: actionType.CREATE_LINK_REQUEST,
    payload
  }
}

export const createLinkSuccess = payload => {
  return {
    type: actionType.CREATE_LINK_SUCCESS,
    payload
  }
}

export const createLinkFailure = error => {
  return {
    type: actionType.CREATE_LINK_FAILURE,
    error
  }
}

export const updateLinkRequest = payload => {
  return {
    type: actionType.UPDATE_LINK_REQUEST,
    payload
  }
}

export const updateLinkSuccess = payload => {
  return {
    type: actionType.UPDATE_LINK_SUCCESS,
    payload
  }
}

export const updateLinkFailure = error => {
  return {
    type: actionType.UPDATE_LINK_FAILURE,
    error
  }
}
