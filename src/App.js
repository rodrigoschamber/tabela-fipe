import React, { Component } from "react";
import {Route,Switch, BrowserRouter as Router} from 'react-router-dom'
import SearchPage from './ui/SearchPage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path={`/`}
            render={() => (
                <SearchPage/>
            )}
          />
          <Route
            render={() => (
              <div>
                <h1>Error 404 -Not found</h1>
              </div>
            )}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
