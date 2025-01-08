import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  AWS_REGION: process.env.AWS_REGION || 'us-east-1',
  COGNITO_USER_POOL_ID: process.env.COGNITO_USER_POOL_ID!,
  COGNITO_CLIENT_ID: process.env.COGNITO_CLIENT_ID!,
  DYNAMODB_TABLE: process.env.DYNAMODB_TABLE || 'Items',
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY!,
  GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY!,
};

