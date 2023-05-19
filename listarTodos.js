import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

export const handler = async (event) => {
  try {
    const scanCommand = new ScanCommand({
      TableName: "productos",
    });

    const { Items: productos } = await dynamo.send(scanCommand);

    return {
      statusCode: 200,
      body: JSON.stringify(productos),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
