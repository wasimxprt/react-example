import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import { Header } from "./components/Common/Header";
import { Category } from "./components/Category/Category";
import { Home } from "./components/Home/Home";

import PropsExample from './components/PropsExample/PropsExample';
import Form from './components/Form/Form';
import EventHandler from "./components/EventHandler/EventHandler";
import Async from "./components/Async/AsyncAPI";
import AddPost from "./components/Async/AddPost"



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


        <Route exact path="/" component={Home} />
        <Route path="/stateless" component={Category} />
        <Route path="/propsexample" component={PropsExample} />
        <Route path="/formsexample" component={Form} />
        <Route path="/eventsexample" component={EventHandler} />
        <Route path="/async" component={Async} />
        <Route path="/add-post" component={AddPost} />

      </div>
    )
  }
}

export default App;
