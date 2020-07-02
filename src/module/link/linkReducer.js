/* eslint-disable import/prefer-default-export */
import { fromJS } from 'immutable'
import * as actionTypes from './actions/linkTypes'

const initialState = fromJS({
  isLoading: true,
  numberOfAllProject: 0,
  query: {
    page: 1,
    pageSize: 10,
    sort: '-createdAt'
  },
  react: 0,
  data: [],
  message: {
    type: 'success',
    text: ''
  },
  showErrors: false,
  validationErrors: {}
})

export const linkReducer = (state = initialState, action) => {
  // console.log(action.type)
  switch (action.type) {
    case actionTypes.GET_ALL_LIST_SUCCESS:
      return state.set('isLoading', false).set('data', action.payload)
    case actionTypes.UPDATE_LINK_SUCCESS:
      return state.setIn(['data', action.payload.id - 1], action.payload)
    default:
      return state
  }
}
