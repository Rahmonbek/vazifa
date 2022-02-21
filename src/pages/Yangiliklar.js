import React, { Component } from "react";
import Header from "./Header";
import { Collapse } from "antd";

import { Col, Container, Row } from "react-bootstrap";
import rasm from "../Img/bosh2.png";
import style from "../Css/Dashboard.module.css";
import styled from "../Css/Yangiliklar.module.css";
import { Navigate } from "react-router-dom";
import axios from "axios";
import {BulbFilled,RightCircleOutlined } from '@ant-design/icons'
import PuffLoader from "react-spinners/PuffLoader";
const { Panel } = Collapse;

export default class Yangiliklar extends Component {
  state = {
    loader: true,
  login:false,
  news:null,
  raqam:0,
  log:false,
  };
  componentDidMount() {
  axios.get('https://gorest.co.in/public/v1/posts/').then(res=>{
   
    this.setState({news:res.data.data, loader: false,})
   
  })
   
  }
 logOut=()=>{
   window.localStorage.removeItem('data')
   this.setState({
     log:true
   })
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
                  <h1>You will find the latest news in the system here</h1>
                  <p>
                  Here you can see the latest news in the system. All information is concise and convenient.
                  </p>
                  <button onClick={this.logOut} className={styled.but} >Logout</button>
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
<Container>
<div className={styled.newsY}>
              <Collapse expandIcon={({ isActive }) => <RightCircleOutlined className={styled.text1} style={{ position:'relative', top:'-5px'}} rotate={isActive ? 90 : 0} />}  expandIconPosition="left" accordion defaultActiveKey={[this.state.raqam]}>
                {this.state.news !== null
                  ? this.state.news.map((item) => {
                      return (
                        <Panel extra={<BulbFilled className={styled.text}/>} className={styled.panel} header={<p className={styled.text1}>{item.title}</p>}>
                          <div>
                            <Container>
                             
                              <div className={styled.yozuv}>
                              
                                <p>{item.body}</p>
                              </div>
                            </Container>
                          </div>
                        </Panel>
                      );
                    })
                  : ""}
              </Collapse>
            </div>
</Container>
       </div>
        </div>
      )}
      <br/>
      <br/>
      <br/>
    </div>:<Navigate to="/login"/>
    }
    </>
      
    );
  }
}

