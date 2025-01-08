import Stripe from 'stripe';
import { env } from '../config/env';

const stripe = new Stripe(env.STRIPE_SECRET_KEY, { apiVersion: '2022-11-15' });

export const payments = {
  async createPaymentIntent(amount: number, currency: string) {
    return stripe.paymentIntents.create({ amount, currency });
  },
};
