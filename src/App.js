import React from 'react'

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/public">Public</Link></li>
        <li><Link to="/private">Private</Link></li>
      </ul> 

      <Route exact path="/" component={Home}/>
      <Route exact path="/public" component={Public}/>
      <Route exact path="/private" component={Private}/>
      <Route exact path="/login" component={Login}/>
    </div> 
  </Router>
)

const Home = () => (
  <div><h2>Home</h2></div>
)

const Public = () => (
  <div><h2>Public</h2></div>
)

const Private = () => {
  return fakeAuth.isAuthenticated ? (
    <div><h2>Private</h2></div>
  ) : (
    <Redirect to="/login"/>
  )
}

const Login = withRouter(({history}) => (
  <div><button onClick={
    () => { 
      fakeAuth.authenticate(
      ()  => history.push('/private')
    )}
  }>login</button></div>
))

const fakeAuth = {
  isAuthenticated: false,
  authenticate(callback) {
    this.isAuthenticated = true
    setTimeout(callback, 100)
  },
  signout(callback) {
    this.isAuthenticated = false
    setTimeout(callback, 100)
  }
}

export default App