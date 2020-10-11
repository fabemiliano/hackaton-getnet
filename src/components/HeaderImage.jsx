import React from 'react';
import LogoRW from '../images/Logo/GetLoyal_r-w.png';
import LogoWR from '../images/Logo/GetLoyal_w-r.png'


export default class HeaderImage extends React.Component {
  render() {
    const { size, type } = this.props;
    return (
      <img className="logo" src={LogoRW} width={size} alt="GetLoyal logo" />
    )
  }
}