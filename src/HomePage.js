import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://hips.hearstapps.com/hmg-prod/images/p90475606-highres-rolls-royce-phantom-1677268219.jpg?crop=0.663xw:0.496xh;0.136xw,0.372xh&resize=1200:*")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundColor: 'yellow',
  };
  

  const textStyle = {
    fontWeight: 'bold',
    color: 'black'
  };


  const responsiveBackgroundStyle = {
    ...backgroundStyle,
    backgroundSize: '100% auto',
  };

  return (
    <div className="home-page" style={backgroundStyle}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">SpotWise Parking Management System</Link>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/registration">Registration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
