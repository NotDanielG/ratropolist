import React, { Component } from 'react';
import './App.css';
import CardCatalog from './CardCatalog';
import About from './About';
import Guide from './Guide';
import Economy from './Economy';
import Military from './Military';
import {Switch, Route, Link} from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className = "row">

            <div className = "leftcontainer">
              <div className = "leftcol">
                <div className = "leftside">
                  <Link className ="App-link" to = '/'><h1 className="App-title">Ratropolist</h1></Link>
                  <nav>
                    <ul className = "page-selection">
                      <li><Link to='/'>Card Gallery</Link></li>
                      <li><Link to='/guide'>Basic Guide to 30</Link></li>
                      <li><Link to='/economy'>Economy Builds</Link></li>
                      <li><Link to='/military'>Military Builds</Link></li>
                      <li><Link to='/'>About</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className = "rightcol">
              <div className = "rightside">
                <Switch>
                    <Route path ='/' component={CardCatalog}/>
                    <Route path = '/guide' component={Guide}/>
                    <Route path = '/economy' component={Economy}/>
                    <Route path = '/military' component={Military}/>
                    <Route path = '/' component={About}/>
                </Switch>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
