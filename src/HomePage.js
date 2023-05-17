import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const HomePage = () => {
  const backgroundStyle = {
    backgroundImage: 'url("https://scontent.fceb1-2.fna.fbcdn.net/v/t1.15752-9/265217446_490335995774956_6522722874612852499_n.png?_nc_cat=100&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeG6HcLFLk2nsUUDyZJURFvgEgtrk7weHFYSC2uTvB4cVspzVaBnqqbsuAqRayMIT4sKuUj39fgP317KVlpXQ0vW&_nc_ohc=UsQ820iVuKEAX9yrxUs&_nc_ht=scontent.fceb1-2.fna&oh=03_AdT8OL1hwj7DfKw3b2GnfmpOBBKWgsRIK3c1FLJUEov24g&oe=648BE745")',
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
