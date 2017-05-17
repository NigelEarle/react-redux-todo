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
} from '../components';

const TodoRouter = () => (
  <BrowserRouter>
    <div className="router">
      <div><Link to="/login">Login</Link></div>
      <Switch>
        <Route exact path="/" component={TodoComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default TodoRouter;
