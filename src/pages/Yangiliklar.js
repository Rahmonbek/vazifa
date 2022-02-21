import React, { Component } from "react";
import Header from "./Header";


import { Col, Container, Row } from "react-bootstrap";
import rasm from "../Img/bosh1.png";
import style from "../Css/Dashboard.module.css";
import styled from "../Css/Yangiliklar.module.css";
import { Navigate } from "react-router-dom";
import axios from "axios";

// import PuffLoader from "react-spinners/PuffLoader";

export default class Yangiliklar extends Component {
  state = {
    loader: false,
  login:false,
  };
  componentDidMount() {
  axios.get('https://gorest.co.in/public/v1/posts/').then(res=>{
    console.log(res.data)
  })
    setTimeout(() => {
      this.setState({
        loader: false,
      });
    }, 1000);
  }
  render() {
    return (<>
    {
      window.localStorage.getItem('data')?<div className={style.dashboardhead}>
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
          {/* <PuffLoader
            color="#ff4500"
            loading={this.state.loader}
            size={200}
          /> */}
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
                  <h1>You will find the latest news in the system here</h1>
                  <p>
                  Here you can see the latest news in the system. All information is concise and convenient.
                  </p>
                  <a href="tel: +998930820372">Contact us</a>
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
       <div className={style.news}>
<Row>
</Row>
       </div>
        </div>
      )}
    </div>:<Navigate to="/login"/>
    }
    </>
      
    );
  }
}

