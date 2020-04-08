import { APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda'
import 'source-map-support/register'
import * as AWS from 'aws-sdk'
import * as AWSXray from 'aws-xray-sdk'

const XAWS = AWSXRay.captureAWS(AWS)

const bucketName = process.env.IMAGES_S3_BUCEKT
const urlExpiration = process.env.SIGNED_URL_EXPIRATION

const s3 = new XAWS.S3({
  signatureVersion: 'v4'
})

export const handler: APIGatewayProxyHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const todoId = event.pathParameters.todoId
  // TODO: Return a presigned URL to upload a file for a TODO item with the provided id
  const uploadUrl = getUploadUrl(todoId)
  
  return {
    statusCode: 201,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    },
    body: JSON.stringify({
      uploadUrl
    })
  }
}
