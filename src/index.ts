import express from 'express';
import bodyParser from 'body-parser';
import { auth } from './handlers/auth';
import { crud } from './handlers/crud';
import { payments } from './handlers/payments';
import { maps } from './handlers/maps';

const app = express();
app.use(bodyParser.json());

// Auth routes
app.post('/auth/signup', async (req, res) => {
  const { username, password } = req.body;
  res.send(await auth.signUp(username, password));
});

app.post('/auth/signin', async (req, res) => {
  const { username, password } = req.body;
  res.send(await auth.signIn(username, password));
});

// CRUD routes
app.post('/items', async (req, res) => {
  res.send(await crud.getItems());
});

app.post('/items', async (req, res) => {
  res.send(await crud.createItem(req.body));
});

app.put('/items/:id', async (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;
  res.send(await crud.updateItem(id, updatedItem));
});

app.delete('/items/:id', async (req, res) => {
  const { id } = req.params;
  res.send(await crud.deleteItem(id));
});

// Payment routes
app.post('/payment/charge', async (req, res) => {
  const { amount, currency } = req.body;
  res.send(await payments.createPaymentIntent(amount, currency));
});

// Maps routes
app.get('/maps/location', async (req, res) => {
  const { address } = req.query;
  res.send(await maps.getLocation(address as string));
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
