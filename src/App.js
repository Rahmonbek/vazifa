import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

import Yangiliklar from "./pages/Yangiliklar";
import Login from "./pages/Login";



export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/yangiliklar" element={<Yangiliklar />} />

          

          </Routes>
         
 
        </BrowserRouter>
      </div>
    );
  }
}