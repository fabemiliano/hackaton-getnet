# GetLoyal

<img src="./getloyal.png">

GetLoyal é um aplicativo que foi desenvolvido durante o Hackaton Empreenda GetNet 2020 por 5 estudantes
da Trybe: Cleyton Oliveira, Fabiano Emiliano, Leandro Parisi, Luciano Scalfone, Paulo Volpin.


Essa aplicação visa melhorar a venda de pequenos e micro empreendedores por meio de uma ferramenta que 
possa armazenar dados dos clientes e de consumo de forma a estreitar as relações com os consumidores e
gerar relatórios gerenciais facilitando a criação de campanhas de fidelização, envio de mensagens em massa
e maior controle das vendas.

O aplicativo seria disponibilizado na getStore e as vendas no cartão pela maquininha seriam automaticamente
registradas pelo aplicativo gerando a base de dados.

## Features da Aplicação

- Tela Principal:
  - Direciona para as funcionalides do aplicativo
- Tela de Configuração de Campanhas de Fidelização:
  - São definidas as configurações da campanha como período e metas de consumo
- Tela de Cadastro de Clientes:
  - São registradas as informações como cpf, whatsapp e email
- Tela de Pagamentos:
  - Ao inserir o cpf os dados da compra fica salva no cadastro do usuário
- Tela de Feedback de Compras:
  - Mostra se a venda foi concluída, valor consumido no total e valor restante para atingir a meta da campanha de fidelização
- Dashboard de Controle de vendas:
  - Trata o banco de dados e demonstra por meio de texto e gráfico os resultados obtidos com a venda
- Dashboard de Controle de Consumo de clientes:

- Disparo de Mensagens via e-mail ou whatsapp:
  - Permite o envio de mensanges como informações sobre horário de funcionamento ou promoções por meio de disparos automático para os e-mails e número de whatsapp selecionados


## Tecnologias Utilizadas

A proposta apresentada é de um aplicativo que rode no POS Android da Getnet.

Para fins de prototipação o aplicativo foi feito em React JS, com auxílio de libs externas tais quais: [Recharts](https://recharts.org/en-US/) e [Count Up](https://www.npmjs.com/package/react-countup)


## Instalação

A aplicação e as dependências externas podem ser instalada localmente:
`npm i`
Para rodar a aplicação:
`npm start`