import React, { useReducer } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';


import Landing from '../pages/Landing';
import Home from '../pages/Home';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';
import NotFound from '../pages/NotFound';
import Trip from '../pages/Trip';
import Dashboard from '../pages/Dashboard';
import { authReducer } from '../auth/authReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

const PrivateRoute = ({ component: Component, ...rest }) => 
  ( 
    <Route {...rest} render={props =>
    (
      localStorage.getItem('user') ? <Dashboard {...props} /> : <Redirect to={{pathname: '/login'}}/>
    )}/>
  );

function App() {

  const [ user, dispatch ] = useReducer(authReducer, {}, init)

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/trip" component={Trip} />
            <Route exact path="/dashboard" name="dashboard" component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;