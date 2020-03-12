import React from 'react'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
