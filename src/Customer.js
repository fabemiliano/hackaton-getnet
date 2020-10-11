import React from 'react';
import { Link } from 'react-router-dom';

function Customer(customer) {
  const { name, cpf, email, phone, buys, temperature } = customer;
  const { goal } = JSON.parse(localStorage.programa);
  const amount = buys.reduce((sum, buy) => sum + buy.total, 0);
  const porcentagemDaMeta = Math.round(amount/goal * 100);
  
  return (
    <div>
      <Link to={`/customer-management/notifer/${cpf}`} style={{textDecoration: 'none', color: 'black'}}> 
      <div key={cpf} className={`customer-${temperature}`}>
        <h1>{name}</h1>
        <p>{ cpf }</p>
        <p>Total acumulado: {amount}</p>

        <p>{porcentagemDaMeta} % da meta batida</p>
        {(porcentagemDaMeta >= 70) ? <a target="_blank" href="https://api.whatsapp.com/send?phone=5534996895183&text=Ol%C3%A1%20Jo%C3%A3o!%20Voc%C3%AA%20tem%20180%20pontos%20acumulados%2C%20que%20tal%20se%20refrescar%20hoje%20com%20uma%20de%20nossas%20op%C3%A7%C3%B5es%20de%20a%C3%A7a%C3%AD%20e%20garantir%20o%20pr%C3%B3ximo%20completando%20seus%20pontos%3F%20">Falta pouco para {name} completar os pontos! Notifique-o e estimule seu cliente a voltar ao estabelecimento!</a> : ''}
        <p>
        Este é um link mail:
        <a href="mailto:someone@microsoft.com?subject=Hello%20again">
        Send Mail </ a>
        </ p>
      </div>
      </Link>
    </div>
  );
}

export default Customer;