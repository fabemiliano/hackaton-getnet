import React, { Component } from 'react';
import Logo from './Logo.jsx';

class FeedbackPage extends Component {
  render() {
    const { name = 'Username', score = 50, goal =  100, gift = 'prêmio' } = this.props;
    return (
      <div>
        <p>
          Parabéns {name}!
        </p>
        <p>
          Muito obrigado pela preferência!
        </p>
        <p>
          Você tem {score} pontos ou reais acumulados!
        </p>
        <p>
          Faltam apenas {goal} para você resgatar seu {gift}.
        </p>
        <Logo />
      </div>
    )
  }
}

export default FeedbackPage;
