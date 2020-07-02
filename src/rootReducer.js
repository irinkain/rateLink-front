import { combineReducers } from 'redux'

import { linkReducer } from './module/link/linkReducer'
import { categoryReducer } from './module/categories/categoryReducer'
import { authReducer } from './module/auth/authReducer'
// import { commonReducer } from './modules/common/commonReducer'

// console.log(projectReducer)

const rootReducer = combineReducers({
  link: linkReducer,
  category: categoryReducer,
  auth: authReducer
})

export default function root(state, action) {
  return rootReducer(state, action)
}
