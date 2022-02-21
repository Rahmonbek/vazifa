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
          <Container className={style.conta}>
            <Navbar.Brand className={style.brandnavbar}>
              <img src={xalq} className={style.xalqrasm} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" className={style.navbarlar}>
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/"
                >
                 Dashboard
                </NavLink>
                <NavLink
                  exact
                  activeStyle={{ color: "orangered" }}
                  className="navbar"
                  to="/login"
                >
                 News
                </NavLink>

              
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
