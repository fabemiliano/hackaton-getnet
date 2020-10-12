import React from 'react';
import { Link } from 'react-router-dom';
import dashboardIcon from './style_sheets/images/Icons/footer-dashboard.webp'
import settingsIcon from './style_sheets/images/Icons/footer-settings.png'
import paymentIcon from './style_sheets/images/Icons/footer-payment.png'
import './style_sheets/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <nav className="footer">
        <Link className="footer-icon-container" to="/dashboard">
          <img src={dashboardIcon} alt="expense icon" width="45px" className="footer-icon" />
        </Link>

        <Link className="footer-icon-container" to="/business-configurations">
          <img src={settingsIcon} alt="expense icon" width="45px" className="footer-icon" />
        </Link>

        <Link className="footer-icon-container" to="/payment">
          <img src={paymentIcon} alt="expense icon" width="45px" className="footer-icon" />
        </Link>
      </nav>
    )
  }
}

export default Footer;