/* eslint-disable import/prefer-default-export */
import { fromJS } from 'immutable'
import * as actionTypes from './actions/categoryTypes'

const initialState = fromJS({
  isLoading: true,
  numberOfAllProject: 0,
  query: {
    page: 1,
    pageSize: 10,
    sort: '-createdAt'
  },
  data: [],
  message: {
    type: 'success',
    text: ''
  },
  showErrors: false,
  validationErrors: {}
})

export const categoryReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case actionTypes.GET_ALL_CATEGORY_SUCCESS:
      return state.set('isLoading', false).set('data', action.payload)
    default:
      return state
  }
}
