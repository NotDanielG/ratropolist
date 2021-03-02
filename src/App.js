import React, { Component } from 'react';
import './App.css';
import CardCatalog from './CardCatalog';
import About from './About';
import {Switch, Route, Link} from 'react-router-dom';
import AdvisorList from './AdvisorList';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className = "row">
            <div className = "leftcontainer">
              <div className = "leftcol">
                <div className = "leftside">
                  <Link className ="App-link" to = '/'><div className="App-title">Ratropolist</div></Link>
                  <nav>
                    <ul className = "page-selection">
                      <li><Link to='/'>Card Gallery</Link></li>
                      {/* <li><Link to='/advisors'>Advisor List</Link></li> */}
                      <li><Link to='/about'>About</Link></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>

            <div className = "rightcol">
              <div className = "rightside">
                <Switch>
                    <Route exact path ='/' component={CardCatalog}/>
                    {/* <Route path = '/advisors' component={AdvisorList}/> */}
                    <Route path = '/about' component={About}/>
                </Switch>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
