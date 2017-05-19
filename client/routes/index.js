import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import {
  LoginComponent,
  TodoComponent,
  NotFoundComponent,
  RegisterComponent,
  HeaderComponent,
} from '../components';

const TodoRouter = () => (
  <BrowserRouter>
    <div className="router">
      <HeaderComponent />
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
