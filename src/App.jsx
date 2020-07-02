import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Link from './module/link/scene/Link'
import { PrivateRoute } from './components/PrivateRoute'
import SignIn from './module/auth/scense/SignIn'
import AddLink from './module/link/scene/AddLink'
import SignUp from './module/auth/scense/SignUp'

function App() {
  return (
    <main>
      <Switch>
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute exact path="/add-link" component={AddLink} />
        <PrivateRoute exact path="/" component={Link} />
      </Switch>
    </main>
  )
}

export default App
