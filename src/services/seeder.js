const storage = [
  {
    name: 'Leandro Parisi',
    cpf: '123.456.789-01',
    email: 'leandroparisi@gmail.com',
    whatsapp: '49989878789',
    isWhatsapp: true,
    purchases: [
      {
        purchaseValue: 300,
        purchaseDate: '2020-10-05T13:16:27.891Z',
      },
      {
      purchaseValue: 1000,
      purchaseDate: '2020-10-09T13:16:27.891Z',
    }],
  },
  {
    name: 'Fabiano Emiliano',
    cpf: '234.567.890-12',
    email: 'fabiano_emiliano@gmail.com',
    whatsapp: '49983478789',
    isWhatsapp: true,
    purchases: [{
      purchaseValue: 1040,
      purchaseDate: '2020-10-01T13:16:27.891Z',
    }],
  },
  {
    name: 'Cleyton Oliveira',
    cpf: '115.796.056-13',
    email: 'cleyton-oliveira@hotmail.com',
    whatsapp: '49983478789',
    isWhatsapp: true,
    purchases: [{
      purchaseValue: 500,
      purchaseDate: '2020-09-30T13:16:27.891Z',
    }],
  },
  {
    name: 'Paulo Volpin',
    cpf: '234.567.890-12',
    email: 'paulo.volpin@gmail.com',
    whatsapp: '49986278789',
    isWhatsapp: true,
    purchases: [{
      purchaseValue: 100,
      purchaseDate: '2020-09-01T13:16:27.891Z',
    }],
  }
];

export const promoSettings = {
  byPoints: false,
  byValue: true,
  conversionFactor: 10,
  pointsGoal: 20,
  valueGoal: 200,
};

export default storage;
