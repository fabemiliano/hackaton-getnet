import React from 'react';
import '../style_sheets/Footer.css';
import {Link} from 'react-router-dom';
import './FlowGuide.css';

class Flow extends React.Component {
  render () {
    const { path } = this.props;
    return (
      <Link className="footer-icon-container" id="navigation-flow" to={path}>
        <p>Next</p>
      {/* <img src={dashboardIcon} alt="expense icon" width="45px" className="footer-icon" /> */}
    </Link>
    )
  }
}

export default Flow;