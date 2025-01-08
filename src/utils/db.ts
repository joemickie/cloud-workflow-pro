import AWS from 'aws-sdk';
import { env } from '../config/env';

const dynamoDB = new AWS.DynamoDB.DocumentClient({ region: env.AWS_REGION });

export const db = {
  async getItem(id: string) {
    const params = {
      TableName: env.DYNAMODB_TABLE,
      Key: { id },
    };
    return dynamoDB.get(params).promise();
  },

  async putItem(item: Record<string, any>) {
    const params = {
      TableName: env.DYNAMODB_TABLE,
      Item: item,
    };
    return dynamoDB.put(params).promise();
  },

  async deleteItem(id: string) {
    const params = {
      TableName: env.DYNAMODB_TABLE,
      Key: { id },
    };
    return dynamoDB.delete(params).promise();
  },

  async scanItems() {
    const params = {
      TableName: env.DYNAMODB_TABLE,
    };
    return dynamoDB.scan(params).promise();
  },

  async updateItem(id: string, updatedItem: Record<string, any>) {
    const params = {
      TableName: env.DYNAMODB_TABLE,
      Key: { id },
      UpdateExpression: 'set #name = :name, #price = :price',
      ExpressionAttributeNames: {
        '#name': 'name',
        '#price': 'price',
      },
      ExpressionAttributeValues: {
        ':name': updatedItem.name,
        ':price': updatedItem.price,
      },
      ReturnValues: 'UPDATED_NEW',
    };
    return dynamoDB.update(params).promise();
  }  
};
