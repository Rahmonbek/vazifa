import React, { Component } from "react";
import Header from "./Header";

import {Navigate} from 'react-router-dom'
import { Col, Container, Row } from "react-bootstrap";
import rasm from "../Img/bosh5.png";
import style from "../Css/Dashboard.module.css";
import styled from "../Css/Login.module.css";

import PuffLoader from "react-spinners/PuffLoader";

export default class Login extends Component {
  state = {
    loader: true,
    login:false,
    log:true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 1000);
  }
  login=()=>{
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    if(username==="admin" && password==="admin12345"){
      this.setState({login:true})
      window.localStorage.setItem("data", "Admin Rahmonbek Ismoilov logged in")
    }else{
      this.setState({log:false})
    }
   
  }
  render() {
    return (<>
    {this.state.login?<Navigate to="/yangiliklar"/>:
    <div className={style.dashboardhead}>
        {this.state.loader ? (
          <div
            style={{
              backgroundColor: "rgb(40, 30, 100)",
              width: "100%",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <PuffLoader
              color="#ff4500"
              loading={this.state.loader}
              size={200}
            />
          </div>
        ) : (
          <div>
            <Header />

            <div className={style.head}>
              <Container>
                <Row>
                  <Col
                    lg="6"
                    md="12"
                    sm="12"
                    style={{
                      display: "flex",
                      
                      justifyContent: "center",
                      alignItems:"center",
                      height: "calc(100vh - 100px)",
                    }}
                    className={style.head1}
                  >
                   <form className={styled.for}>
                   <label>Enter your username</label>
                   <input id="username" type="text" /><br/><br/>
                   <label>Enter your password</label>
                   <input id="password" type="password" /><br/>
                   {!this.state.log?<p>Username and password are incorrect. Please check and try again.</p>:''}
                   <button type="button" onClick={this.login} className={styled.but}>Login</button>


                   </form>
                   
                  </Col>
                  <Col lg="6" md="12" sm="12">
                    <br />
                    <br />
                    <div className={style.afterrasm}>
                      <div className={style.rasm}>
                        <div className={style.rasm1}>
                          <div className={style.rasm2}>
                            <img src={rasm} alt="..." />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
         
          </div>
        )}
      </div>}
    </>
      
    );
  }
}

