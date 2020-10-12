const apiAnswer = [
  {
    "seller_id": "204a2429-4648-4ea1-9c13-6f44a975450c",
    "amount": "10.00",
    "order": {
      "order_id": "001"
    },
    "customer": {
      "customer_id": "cliente001@email.com",
      "billing_address": {}
    },
    "device": {},
    "shippings": [
      {
        "address": {}
      }
    ],
    "credit": {
      "delayed": false,
      "save_card_data": true,
      "transaction_type": "FULL",
      "number_installments": "1",
      "card": {
        "cardholder_name": "Luciano scalfone",
        "expiration_month": "12",
        "expiration_year": "2022"
      }
    }
  },

  {
    "seller_id": "204a2429-4648-4ea1-9c13-6f44a975450c",
    "amount": "100.00",
    "order": {
      "order_id": "002"
    },
    "customer": {
      "customer_id": "cliente002@email.com",
      "billing_address": {}
    },
    "device": {},
    "shippings": [
      {
        "address": {}
      }
    ],
    "credit": {
      "delayed": false,
      "save_card_data": true,
      "transaction_type": "FULL",
      "number_installments": "1",
      "card": {
        "cardholder_name": "Cleyton Oliveira",
        "expiration_month": "12",
        "expiration_year": "2021"
      }
    }
  },

  {
    "seller_id": "204a2429-4648-4ea1-9c13-6f44a975450c",
    "amount": "25.50",
    "order": {
      "order_id": "003"
    },
    "customer": {
      "customer_id": "cliente003@email.com",
      "billing_address": {}
    },
    "device": {},
    "shippings": [
      {
        "address": {}
      }
    ],
    "debit": {
      "card": {
        "expiration_month": "12",
        "expiration_year": "2021"
      }
    }
  },
];

export default apiAnswer;
