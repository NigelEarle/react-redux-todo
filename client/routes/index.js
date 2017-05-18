import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
} from 'react-router-dom';

import {
  LoginComponent,
  TodoComponent,
  NotFoundComponent,
  RegisterComponent,
} from '../components';

const TodoRouter = () => (
  <BrowserRouter>
    <div className="router">
      <div><Link to="/">Home</Link></div>
      <div><Link to="/login">Login</Link></div>
      <div><Link to="/register">Register</Link></div>
      <Switch>
        <Route exact path="/" component={TodoComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route path="/register" component={RegisterComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default TodoRouter;
