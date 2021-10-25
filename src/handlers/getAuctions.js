import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

const getAuctions = async (event, context) => {
  const { status } = event.queryStringParameters;
  console.log(status);
  let auctions;

  const params = {
    TableName: process.env.AUCTION_TABLE_NAME
  }
  if (status != undefined) {
    params.IndexName = 'statusAndEndDate';
    params.KeyConditionExpression = '#status= :status';
    params.ExpressionAttributeValues = {
      ':status': status
    };
    params.ExpressionAttributeNames = {
      '#status': 'status'
    }
  }
  console.log(params);

  try {
    let result;
    if (status != undefined) {
      result = await dynamodb.query(params).promise();
    } else {
      result = await dynamodb.scan(params).promise();
    }
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
