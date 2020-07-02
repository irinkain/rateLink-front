import { takeLatest, all } from 'redux-saga/effects'

import * as linkTypes from './module/link/actions/linkTypes'
import * as linkSaga from './module/link/linkSaga'

import * as categoryTypes from './module/categories/actions/categoryTypes'
import * as categorySaga from './module/categories/categorySaga'

import * as authTypes from './module/auth/actions/authTypes'
import * as authSaga from './module/auth/authSaga'

export default function* root() {
  yield all([
    takeLatest(linkTypes.GET_ALL_LIST_REQUEST, linkSaga.linkListSaga),
    takeLatest(
      categoryTypes.GET_ALL_CATEGORY_REQUEST,
      categorySaga.categoryListSaga
    ),
    takeLatest(linkTypes.CREATE_LINK_REQUEST, linkSaga.createLinkSaga),
    takeLatest(linkTypes.UPDATE_LINK_REQUEST, linkSaga.updateLinkSaga),
    takeLatest(authTypes.AUTH_USER_REQUEST, authSaga.authLoginSaga),
    takeLatest(authTypes.REGISTER_USER_REQUEST, authSaga.authRegisterSaga)
  ])
}
