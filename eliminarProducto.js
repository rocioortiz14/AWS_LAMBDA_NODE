import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand } from "@aws-sdk/lib-dynamodb";

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

    // Eliminar el producto de DynamoDB
    const deleteItemCommand = new DeleteCommand({
      TableName: "productos",
      Key: {
        id: id,
      },
    });

    await dynamo.send(deleteItemCommand);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Producto eliminado correctamente.' }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };
  }
};
