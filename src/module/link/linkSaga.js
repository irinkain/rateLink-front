/* eslint-disable import/prefer-default-export */
import { call, put } from 'redux-saga/effects'
import * as linkActions from './actions/linkActions'
import * as linkApi from '../../service/linkService'

export function* linkListSaga(action) {
  try {
    const { error, message, data } = yield call(linkApi.getAllLink)
    if (error) {
      yield put(linkActions.getAllListFailure(message))
    } else {
      yield put(linkActions.getAllListSuccess(data))
    }
  } catch (error) {
    yield put(linkActions.getAllListFailure(error))
  }
}

export function* createLinkSaga(action) {
  try {
    const { error, message, data } = yield call(
      linkApi.createLink,
      action.payload
    )
    if (error) {
      yield put(linkActions.createLinkFailure(message))
    } else {
      yield put(linkActions.createLinkSuccess(data))
    }
  } catch (error) {
    yield put(linkActions.createLinkFailure(error))
  }
}

export function* updateLinkSaga(action) {
  try {
    console.log(action.payload)
    const { error, message, data } = yield call(
      linkApi.updateLink,
      action.payload
    )
    if (error) {
      yield put(linkActions.updateLinkFailure(message))
    } else {
      yield put(linkActions.updateLinkSuccess(data))
    }
  } catch (error) {
    console.log(error)
    yield put(linkActions.updateLinkFailure(error))
  }
}
