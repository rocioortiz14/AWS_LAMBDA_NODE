import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

export const handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;

    // Verificar si el ID está presente
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Falta el parámetro "id".' }),
      };
    }

    const getCommand = new GetCommand({
      TableName: "productos",
      Key: {
        id: id,
      },
    });

    const { Item: producto } = await dynamo.send(getCommand);

    // Verificar si el producto existe
    if (!producto) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'El producto no existe.' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(producto),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
