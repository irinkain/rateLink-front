import * as actionType from './categoryTypes'

export const getAllCategoryRequest = () => {
  return {
    type: actionType.GET_ALL_CATEGORY_REQUEST
  }
}

export const getAllCategorySuccess = payload => {
  return {
    type: actionType.GET_ALL_CATEGORY_SUCCESS,
    payload
  }
}

export const getAllCategoryFailure = error => {
  return {
    type: actionType.GET_ALL_CATEGORY_FAILURE,
    error
  }
}
