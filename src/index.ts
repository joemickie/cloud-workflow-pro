import express from 'express';
import bodyParser from 'body-parser';
import { auth } from './handlers/auth';
import { crud } from './handlers/crud';
import { payments } from './handlers/payments';
import { maps } from './handlers/maps';

const app = express();
app.use(bodyParser.json());

// Auth routes
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  res.send(await auth.signUp(username, password));
});

// CRUD routes
app.post('/item', async (req, res) => {
  res.send(await crud.createItem(req.body));
});

// Payment routes
app.post('/payment', async (req, res) => {
  const { amount, currency } = req.body;
  res.send(await payments.createPaymentIntent(amount, currency));
});

// Maps routes
app.get('/location', async (req, res) => {
  const { address } = req.query;
  res.send(await maps.getLocation(address as string));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
