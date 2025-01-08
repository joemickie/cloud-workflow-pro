import AWS from 'aws-sdk';
import { env } from '../config/env';

const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: env.AWS_REGION });

export const db = {
  async getItem(id: string) {
    return dynamoDB.get({ TableName: env.DYNAMODB_TABLE, Key: { id } }).promise();
  },
  async putItem(item: Record<string, any>) {
    return dynamoDB.put({ TableName: env.DYNAMODB_TABLE, Item: item }).promise();
  },
  async deleteItem(id: string) {
    return dynamoDB.delete({ TableName: env.DYNAMODB_TABLE, Key: { id } }).promise();
  },
};