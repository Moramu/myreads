import React, { Component } from 'react';
import Library from './Library'
import Search from './SearchBooks'
import Error from './Error404'
import './App.css';
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="App">
      	 <Switch>
         	<Route exact path="/" component={Library} />
          <Route path="/search" component={Search} />
          <Route component={Error} />
         </Switch>
      </div>
    )
  }
}

export default App;