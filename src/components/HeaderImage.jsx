import React from 'react';
import LogoRW from '../images/Logo/GetLoyal_r-w.png';

export default class HeaderImage extends React.Component {
  render() {
    const { size } = this.props;
    return (
      <img className="logo" src={LogoRW} width={size} alt="GetLoyal logo" />
    )
  }
}