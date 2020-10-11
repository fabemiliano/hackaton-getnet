import React, { Component } from 'react';
import Logo from './Logo.jsx';

class FeedbackPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      lastPurchase: '',
      sumOfPurchase: '',
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
    // const promoSettings = JSON.parse(localStorage.getItem('promoSettings'));
    const promoSettings = {
      byPoints: true,
      byValue: false,
      pointsGoal: 200,
      valueGoal: 100,
    }
    const { byPoints, byValue, pointsGoal, valueGoal } = promoSettings;
    const { sumOfPurchase } = this.state;
    if (byPoints) return (
      <p>
        Faltam apenas <b>{pointsGoal - sumOfPurchase} pontos</b> para você resgatar seu prêmio.
      </p>
    )
    if (byValue) return (
        <p>
          Faltam apenas <b>R$ {valueGoal - sumOfPurchase}</b> para você resgatar seu prêmio.
        </p>
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
        <p>
          Você tem {sumOfPurchase} acumulados.
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
