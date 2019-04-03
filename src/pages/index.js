import React from 'react';
import routes from '../route/router.js';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {};
  }
  render () {
    return (
      <div>
        <div>Welcome To Fred's World</div>
          <Router>
            <ul>
              <li>
                <Link to="/Game">Game</Link>
              </li>
              <li>
                <Link to="/Goods">Goods</Link>
              </li>
            </ul>
            {routes.map((route, i) => (
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Router>
      </div>
    )
  }
}

function RouteWithSubRoutes( route ) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

export default  Home