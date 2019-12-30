import React, { Component } from 'react';
import './App.css';
import CardCatalog from './CardCatalog';
import About from './About';
import {Switch, Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">Ratropolist</h1>
          <nav>
            <ul>
              <li><Link to='/'>Cards</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
        </div>
        <div className="container" style={{backgroundImage: 'url(' + require('./resources/background.png') + ')'}}>
          <div id="background" >
          </div>
          <Switch>
              <Route exact path ='/' component={CardCatalog}/>
              <Route path = '/about' component={About}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
