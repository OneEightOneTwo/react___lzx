import react from 'react';
import { Router, Route, Switch } from 'dva/router';
import Home from './routes/homePage/home';




function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
