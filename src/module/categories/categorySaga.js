/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects'
import * as categoryActions from './actions/categoryActions'
import * as categorySerive from '../../service/categoryService'

export function* categoryListSaga(action) {
  try {
    const { error, message, data } = yield call(categorySerive.getAllCategory)
    if (error) {
      yield put(categoryActions.getAllCategoryFailure(message))
    } else {
      yield put(categoryActions.getAllCategorySuccess(data))
    }
  } catch (error) {
    yield put(categoryActions.getAllCategoryFailure(error))
  }
}
