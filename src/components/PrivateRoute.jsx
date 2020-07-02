import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { getAuthToken } from '../utils/auth'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = getAuthToken()
  return (
    <Route
      {...rest}
      render={props =>
        token != null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/sign-in',
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
}
