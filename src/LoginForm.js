import React from 'react';
import { Link } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

function LoginForm() {
  const backgroundStyle = {
    backgroundImage: 'url("https://scontent.fceb1-1.fna.fbcdn.net/v/t1.15752-9/286026868_1058337681766182_6426244544376992141_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHN_HxXQ10fcvMhlrci_OnIUjbqZeYwNJdSNupl5jA0l9h7TequazXHthZndcXLPLqFDlCO5O9XMbv0Sty-lysx&_nc_ohc=HHIRkPpVY80AX_beOMW&_nc_ht=scontent.fceb1-1.fna&oh=03_AdQGSQBPO2sjuWlU2hkpyGnKFspkWRjBwRh65aUXrI5Tcw&oe=648C119A")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundColor: 'yellow',
  };
  
  const textStyle = {
    fontWeight: 'bold',
    color: 'black'
  };

  return (
    <div style={backgroundStyle}> 
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

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <MDBInput wrapperClass="mb-4" label="Email address" id="form1" type="email" />
        <MDBInput wrapperClass="mb-4" label="Password" id="form2" type="password" />

        <div className="d-flex justify-content-between mx-3 mb-4">
          <MDBCheckbox name="flexCheck" value="" id="flexCheckDefault" label="Remember me" />
          <a href="#!">Forgot password?</a>
        </div>

        <MDBBtn className="mb-4">Sign in</MDBBtn>

        <div className="text-center">
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
          <p>or sign up with:</p>

          <div className="d-flex justify-content-between mx-auto" style={{ width: '40%' }}>
            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>

            <MDBBtn tag="a" color="none" className="m-1" style={{ color: '#1266f1' }}>
              <MDBIcon fab icon="github" size="sm" />
            </MDBBtn>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default LoginForm;
