import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import {AuthRoute, ProtectedRoute, RefreshRoute} from '../util/route_util';
import SessionFormContainer from './session/session_form_container';
import HomeContainer from './home/home_container';
import PackageContainer from './package/package_container';
import ContractorShowContainer from './contractor/contractor_show_container';
import UserContainer from './user/user_container';


const App = () => (
  <div className='main'>
    <Switch>
      <Route exact path='/' component={HomeContainer} />
      <Route exact path='/packages' component={PackageContainer} />
      <AuthRoute exact path='/signup' component={SessionFormContainer} />
      <AuthRoute exact path='/login' component={SessionFormContainer} />
      <ProtectedRoute exact path='/user' component={UserContainer} />
      <ProtectedRoute path='/contractor/main' component={ContractorShowContainer}></ProtectedRoute>
      <RefreshRoute path="/refresh"/>
    </Switch>
  </div>
);

export default App;
// <Route component={NotFound} />
