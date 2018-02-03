import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import { Header } from "./components/Common/Header";
import { Category } from "./components/Category/Category";
import { Home } from "./components/Home/Home";


import PropsExample from './components/PropsExample/PropsExample';
import Form from './components/Form/Form';



/* App component */
class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
        </div>


        <Route path="/" component={Home} />
        <Route path="/stateless" component={Category} />
        <Route path="/propsexample" component={PropsExample} />
        <Route path="/formsexample" component={Form} />

      </div>
    )
  }
}

export default App;
