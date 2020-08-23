const routes = require('express').Router();

routes.get('/', async (req, res) => {
  return res.render('index.html');
});

routes.get('/products', async (req, res) => {
  const data = {
    offer: req.query.offer,
    cep: req.query.cep,
  };
  console.log(data);
  const results = {
    name: [
      'Iphone XR',
      'Iphone 11',
      'Iphone X',
      'Iphone 11 Max Pro',
      'Iphone XR Pro',
    ],
    image: [
      'https://bit.ly/3gqNPr8',
      'https://bit.ly/3gqNPr8',
      'https://bit.ly/3gqNPr8',
      'https://bit.ly/3gqNPr8',
      'https://bit.ly/3gqNPr8',
    ],
    price: ['3,969', '4,459', '3,999', '4,999', '4,354'],
    shipping: ['80', '15', '67', '129.30', '10'],
  };
  return res.render('search-results.html', { results, data, total: 5 });
});

routes.get('/loading', async (req, res) => {
  return res.render('loading.html');
});

// routes.get('/products', async (req, res) => {
//   return res.render('search-results.html');
// });

routes.get('/checkout', async (req, res) => {
  return res.render('checkout.html');
});

module.exports = routes;
