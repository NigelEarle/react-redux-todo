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
} from '../components';

const TodoRouter = () => (
  <BrowserRouter>
    <div className="router">
      <Switch>
        <Route exact path="/" component={TodoComponent} />
        <Route path="/login" component={LoginComponent} />
        <Route component={NotFoundComponent} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default TodoRouter;
