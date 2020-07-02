/* eslint-disable react/jsx-filename-extension */
import 'babel-polyfill'
import React from 'react'
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import reducers from './rootReducer'
import rootSaga from './rootSagas'
import App from './App'
import * as serviceWorker from './serviceWorker'

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ || (() => noop => noop)
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const enhancers = [applyMiddleware(...middlewares), devtools()]
const store = createStore(reducers, compose(...enhancers))

// console.log(store)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
