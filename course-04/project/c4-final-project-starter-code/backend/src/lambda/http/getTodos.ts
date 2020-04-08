import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'
// import * as AWSXray from 'aws-xray-sdk'

// const XAWS = AWSXRay.captureAWS(AWS)

const docClient = new AWS.DynamoDB.DocumentClient()
// const docClient = new XAWS.DynamoDB.DocumentClient()
const todostTable = process.env.TODOS_TABLE

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  console.log('Processing event: ', event)
  // TODO: Get all TODO items for a current user
  
  const result = await docClient.scan({
    TableName: todosTable
  }).promise()
  
  const items = result.Items
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      items
    })
  }
}
