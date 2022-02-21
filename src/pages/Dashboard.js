import React, { Component } from "react";
import Header from "./Header";
import {Navigate} from 'react-router-dom'

import { Col, Container, Row } from "react-bootstrap";
import rasm from "../Img/bosh1.png";
import style from "../Css/Dashboard.module.css";
import PuffLoader from "react-spinners/PuffLoader";

export default class Dashboard extends Component {
  state = {
    loader: true,
    login:false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 2000);
  }
login=()=>{
this.setState({
login:true
})
}
  render() {
    return (
      <>
      {
        this.state.login?<Navigate to="/login"/>:<div className={style.dashboardhead}>
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
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                    className={style.head1}
                  >
                    <h1>Reading is the best learning.</h1>
                    <p>
                    As with everything in reading, we are
                       suffer from inaction and not for life
                       reading for school.
                    </p>
                    <button onClick={this.login} className={style.but}>Login</button>
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
      </div>
      }
      </>
      
    );
  }
}
