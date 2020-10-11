import React, { Component } from 'react';
import Logo from './Logo.jsx';

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
      <div>
        <p>
          Parabéns {name}!
        </p>
        <p>
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
