// using new AWS sdk version
const { DynamoDBClient } = require("@aws-sdk/client-dynamodb")
const { DynamoDBDocumentClient } = require("@aws-sdk/lib-dynamodb"); 

require('dotenv').config();

// connect to dynamodb, and export client and docClient to interact with dynamodb
const ddbConfig = {
    region: process.env.AWS_DEFAULT_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};

const client = new DynamoDBClient(ddbConfig);
const docClient = DynamoDBDocumentClient.from(client);

module.exports = {
    client, docClient
}