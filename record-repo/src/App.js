import React from 'react'
import AppRouter from './AppRouter'
import { createBrowserHistory } from 'history'
import { Router, withRouter } from 'react-router-dom'

const repohistory = createBrowserHistory()

let App = () => {
  return (
    <AppRouter />
  )
}
App = withRouter(App)

const AppContainer=()=> {
  return (
    <Router history={repohistory}>
      <App />
    </Router>
  );
}

export default AppContainer;
