import jwt from 'jsonwebtoken';

export const authHelpers = {
  generateToken(payload: object, secret: string, expiresIn: string = '1h') {
    return jwt.sign(payload, secret, { expiresIn });
  },
  verifyToken(token: string, secret: string) {
    return jwt.verify(token, secret);
  },
};
