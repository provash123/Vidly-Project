import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Movies from './components/movies'
import MoviesTable from './components/MoviesTable';
import Vidly from './components/Vidly';
import Customer from './components/Customer';
import Rental from './components/Rental';
import NavBar from './components/NavBar';

import NotFound from './components/NotFound';
import MoviesFrom from './components/MoviesFrom';
import LoginFrom from './components/Login';
import Register from './components/Register';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
      <NavBar/>
      <div className="container">
      <Switch>
        <Route path="/movies/:id" component={MoviesFrom} />
        <Route path="/movies"  component={Movies} />
        <Route path="/customers"  component={Customer} />
        <Route path="/rentals"  component={Rental} />
        <Route path="/login" component={LoginFrom} />
        <Route path="/register" component={Register}/>
        <Route path="/not-found"  component={NotFound} />
        <Redirect from="/" exact to="/movies" />
        <Redirect to="/not-found" />
        
        
        </Switch>
      </div>
      </div>
     );
  }
}
 
export default App;