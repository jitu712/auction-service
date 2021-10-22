import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

const getAuctions = async (event, context) => {
  let auctions;

  try {
    const result = await dynamodb.scan({ TableName: process.env.AUCTION_TABLE_NAME }).promise();
    auctions = result.Items;
  } catch (error) {
    console.log(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(auctions)
  };
};

export const handler = commonMiddleware(getAuctions)
