import React from 'react';
import LogoRW from '../images/Logo/GetLoyal_r-w.png';
import LogoWR from '../images/Logo/GetLoyal_w-r.png'


export default class HeaderImage extends React.Component {
  render() {
    return (
      <img src={LogoRW} width="200px" alt="GetLoyal logo" />
    )
  }
}