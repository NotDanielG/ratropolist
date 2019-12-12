import React, { Component } from 'react';
import './App.css';
import CardCatalog from './CardCatalog';
import About from './About';
import {Switch, Route, Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ratropolist</h1>
            <nav>
              <ul>
                <li><Link to='/'>Cards</Link></li>
                <li><Link to='/about'>About</Link></li>
              </ul>
          </nav>
        </header>
        <div className="container">
          <div id="background" style={{backgroundImage: 'url(' + require('./resources/background.png') + ')'}}>
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
