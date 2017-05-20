import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import {
  LoginComponent,
  TodoComponent,
  NotFoundComponent,
  RegisterComponent,
} from '../components';

const PrivateRoute = ({ component: Component }) => (
  <Route
    render={() => (
      (localStorage.getItem('isAuthenticated'))
        ? <Component />
        :
        <Redirect
          to={{
            pathname: '/login',
          }}
        />
    )}
  />
);

const TodoRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Switch>
        <PrivateRoute exact path="/" component={TodoComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default TodoRouter;
