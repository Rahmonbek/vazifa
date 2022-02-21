import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Switch, Route,} from "react-router-dom";

import Yangiliklar from "./pages/Yangiliklar";



export default class App extends Component {
  render() {
    return (
      <div>
          <Dashboard />
        {/* <BrowserRouter>
          <Switch>
            <Route exact path="/">
            
            </Route>
           
            <Route path="/yangiliklar">
              <Yangiliklar />
            </Route>
      
          
          </Switch>
        </BrowserRouter> */}
      </div>
    );
  }
}