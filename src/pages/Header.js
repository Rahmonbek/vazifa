import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import xalq from "../Img/xalq.png";
import style from "../Css/Head.module.css";
import { NavLink } from "react-router-dom";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
export default class Header extends Component {
  render() {
    return (
      <div className={style.headnavbar}>
        <Navbar collapseOnSelect expand="lg" className={style.navabrs}>
                 </Navbar>
      </div>
    );
  }
}
