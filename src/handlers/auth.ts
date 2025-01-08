import AWS from 'aws-sdk';
import { env } from '../config/env';

const cognito = new AWS.CognitoIdentityServiceProvider({ region: env.AWS_REGION });

export const auth = {
  async signUp(username: string, password: string) {
    const params = {
      ClientId: env.COGNITO_CLIENT_ID,
      Username: username,
      Password: password,
    };
    return cognito.signUp(params).promise();
  },
  async signIn(username: string, password: string) {
    const params = {
      AuthFlow: 'USER_PASSWORD_AUTH',
      ClientId: env.COGNITO_CLIENT_ID,
      AuthParameters: { USERNAME: username, PASSWORD: password },
    };
    return cognito.initiateAuth(params).promise();
  },
};
