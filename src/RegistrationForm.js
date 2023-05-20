import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
} from 'mdb-react-ui-kit';

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email:"",
      password:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    console.log(username, email, password);
    axios
      .post("http://localhost:3000/registerUser", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res.data, "userRegister");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  
  render() {
    const { username, email, password } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" to="/">
              SpotWise Parking Management System
            </Link>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/registration">
                  Registration
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <MDBContainer fluid>
          <MDBCard className="text-black m-5" style={{ borderRadius: '25px' }}>
            <MDBCardBody>
              <MDBRow>
                <MDBCol md="10" lg="6" className="order-2 order-lg-1 d-flex flex-column align-items-center">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                  <div className="d-flex flex-row align-items-center mb-4 ">
                    <MDBIcon fas icon="user me-3" size="lg" />
                    <MDBInput
                      label="Your Name"
                      id="form1"
                      type="text"
                      className="w-100"
                      value={username}
                      onChange={(e) => this.setState({ username: e.target.value })}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="envelope me-3" size="lg" />
                    <MDBInput
                      label="Your Email"
                      id="form2"
                      type="email"
                      value={email}
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="lock me-3" size="lg" />
                    <MDBInput
                      label="Password"
                      id="form3"
                      type="password"
                      value={password}
                      onChange={(e) => this.setState({ password: e.target.value })}
                    />
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <MDBIcon fas icon="key me-3" size="lg" />
                    <MDBInput label="Repeat your password" id="form4" type="password" />
                  </div>
                  <div className="mb-4">
                    <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Accept terms and conditions" />
                  </div>
                  <MDBBtn className="mb-4" size="lg" onClick={this.handleSubmit}>
                    Register
                  </MDBBtn>
                </MDBCol>
                <MDBCol md="10" lg="6" className="order-1 order-lg-2 d-flex align-items-center">
                  <MDBCardImage src="https://cdn.luxe.digital/media/20230103133024/most-expensive-cars-2023-list-luxe-digital.jpg" fluid />
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
      </div>
    );
  }
}

export default Registration;
