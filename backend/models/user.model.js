const { client, docClient } = require('../dynamo');
const { PutCommand, QueryCommand } = require('@aws-sdk/lib-dynamodb');

// the name of your users table
const TABLE_NAME = 'users';

exports.create = async (userObj) => {
    const params = {
        TableName: TABLE_NAME,
        Item: userObj
    };

    const command = new PutCommand(params);
    const response = await docClient.send(command);
    
    return response;
}

exports.findOne = async (email) => {
    const params = {
        TableName: TABLE_NAME,
        Key: {
            email
        },
        ExpressionAttributeValues: {
            ':s': email
        },
        KeyConditionExpression: 'email = :s'
    }
    
    const command = new QueryCommand(params);
    const response = await docClient.send(command);
    
    return response;
}

