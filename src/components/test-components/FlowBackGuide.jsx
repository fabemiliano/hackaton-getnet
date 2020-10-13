import React from 'react';
import '../style_sheets/Footer.css';
import {Link} from 'react-router-dom';
import './FlowBackGuide.css';

class FlowBack extends React.Component {
  render () {
    const { path } = this.props;
    return (
      <Link className="footer-icon-container" id="navigation-flow-back" to={path}>
        <p>Back</p>
      {/* <img src={dashboardIcon} alt="expense icon" width="45px" className="footer-icon" /> */}
    </Link>
    )
  }
}

export default FlowBack;