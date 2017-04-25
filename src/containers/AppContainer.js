import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import createBrowserHistory from 'history/createBrowserHistory';
import {Provider} from 'react-redux';

class AppContainer extends Component {
  static propTypes = {
    routes: PropTypes.array.isRequired,
    store: PropTypes.object.isRequired,
  };

  render() {
    const {routes, store} = this.props;
    const history = createBrowserHistory();

    const renderedRoutes = routes.map((route, i) => (
        <RouteWithSubRoutes key={i} {...route}/>
    ));

    return (
        <Provider store={store}>
          <Router history={history}>
            <div>
              <Switch>
                {renderedRoutes}
              </Switch>
            </div>
          </Router>
        </Provider>
    );
  }
}

const RouteWithSubRoutes = (route) => (
    <Route path={route.path} render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes}/>
    )}/>
);

export default AppContainer;
