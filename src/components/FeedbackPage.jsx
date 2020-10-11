import React, { Component } from 'react';
import HeaderImage from './HeaderImage';
import './style_sheets/FeedBackPage.css';
import CountUp from 'react-countup';


class FeedbackPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastPurchase: '',
      sumOfPurchase: 0,
    }
  }

  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('customerPurchases'));
    const purchase = storage.pop();
    const { purchases, name } = purchase;
    this.setState({
      sumOfPurchase: purchases.reduce((acc, value) => acc + Number(value.purchaseValue), 0),
      lastPurchase: purchases.pop().purchaseValue,
      name,
    })
  }

  renderGoal() {
    const promoSettings = JSON.parse(localStorage.getItem('promoSettings'));
    const { byPoints, byValue, pointsGoal, valueGoal, conversionFactor } = promoSettings;
    const { sumOfPurchase } = this.state;
    console.log(sumOfPurchase);
    const convertMoneyToPoints = sumOfPurchase / conversionFactor;
    if (byPoints) return (
      <span>
        <p className="paragraph-3 feedbackpage-line">
          Você tem {convertMoneyToPoints} pontos acumulados.
        </p>
        <p className="paragraph-4 feedbackpage-line">
          Faltam apenas 
        </p>
        <div className="counter-container">
          <CountUp end={pointsGoal - convertMoneyToPoints} duration={2} />
        </div>
        <p>pontos para você resgatar seu prêmio.</p>
      </span>
    )
    if (byValue) return (
      <span>
        <p className="paragraph-3 feedbackpage-line">
          Você consumiu o total de R$ {sumOfPurchase} reais.
        </p>
        <p className="paragraph-4 feedbackpage-line">
          Faltam apenas
        </p>
        <div className="counter-container">
          R$ <CountUp end={valueGoal - sumOfPurchase} duration={5} />
        </div>
        <p>para você resgatar seu prêmio.</p>
      </span>
    )
    return (
      <p>
        <b>OBRIGADO!</b>
      </p>
    )
  }

  render() {
    const { name } = this.state;
    return (
      <div className="feedback-page">
        <p className="paragraph-1 feedbackpage-line">
          Parabéns {name}!
        </p>
        <p className="paragraph-2 feedbackpage-line">
          Muito obrigado pela preferência!
        </p>
        <span>
          {this.renderGoal()}
        </span>
        <HeaderImage size="150px"/>
      </div>
    )
  }
}

export default FeedbackPage;
