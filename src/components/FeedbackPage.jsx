import React, { Component } from 'react';

class FeedbackPage extends Component {
  render() {
    const { name = 'Username', score = 50 } = this.props;
    return (
      <div>
        <p>
          Parabéns {name}, compra concluída com sucesso.
        </p>
        <p>
          Faltam apenas {score} para você resgatar seu prêmio.
        </p>
      </div>
    )
  }
}

export default FeedbackPage;
