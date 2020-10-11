import React, { Component } from 'react';
import Logo from './Logo.jsx';
import HeaderImage from './HeaderImage';
import './style_sheets/FeedBackPage.css';
import FbPageCounter from './FbPageCounter'
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
      sumOfPurchase: purchases.reduce((acc, value) => acc + value.purchaseValue, 0),
      lastPurchase: purchases.pop().purchaseValue,
      name,
    })
  }

  renderGoal() {
    const promoSettings = JSON.parse(localStorage.getItem('promoSettings'));
    const { byPoints, byValue, pointsGoal, valueGoal, conversionFactor } = promoSettings;
    const { sumOfPurchase } = this.state;
    const convertMoneyToPoints = sumOfPurchase / conversionFactor;
    if (byPoints) return (
      <span>
        <p>
          Você tem {convertMoneyToPoints} pontos acumulados.
        </p>
        <p>
          Faltam apenas <b>{pointsGoal - convertMoneyToPoints} pontos</b> para você resgatar seu prêmio.
        </p>
      </span>
    )
    if (byValue) return (
      <span>
        <p>
          Total consumido R$ {sumOfPurchase} reais.
        </p>
        <p>
          Faltam apenas <b>R$ {valueGoal - sumOfPurchase}</b> para você resgatar seu prêmio.
        </p>
      </span>
    )
    return (
      <p>
        <b>OBRIGADO!</b>
      </p>
    )
  }

  render() {
    const { name, sumOfPurchase } = this.state;
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
        <Logo />
      </div>
    )
  }
}

export default FeedbackPage;
