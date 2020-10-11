import React, { Component } from 'react';
import Logo from './Logo.jsx';
import HeaderImage from './HeaderImage';
import './style_sheets/FeedBackPage.css';
import FbPageCounter from './FbPageCounter'
import CountUp from 'react-countup';


class FeedbackPage extends Component {
  render() {
    const { name = 'Username', score = 50, goal =  100, gift = 'prêmio' } = this.props;
    return (
      <div className="mobile-simulated-page">
        <p className="paragraph-1 feedbackpage-line">
          Parabéns {name}!
        </p>
        <p className="paragraph-2 feedbackpage-line">
          Muito obrigado pela preferência!
        </p>
        <p className="paragraph-3 feedbackpage-line">
          Você tem {score} pontos ou reais acumulados!
        </p>
        <p className="paragraph-4 feedbackpage-line">
          Faltam apenas 
        </p>
        <div className="counter-container">
          <CountUp end={100} duration={5} />
        </div>
        <p>para você resgatar seu {gift}.</p>
        
        <HeaderImage size="150px"/>
      </div>
    )
  }
}

export default FeedbackPage;
