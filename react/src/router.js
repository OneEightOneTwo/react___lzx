import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import gaoli from './routes/gaoli/gaoli';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/gaoli" exact component={gaoli} />
       
      </Switch>
    </Router>
  );
}

export default RouterConfig;
