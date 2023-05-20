import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand } from "@aws-sdk/lib-dynamodb";

// Importación de módulos necesarios para interactuar con DynamoDB

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

// Creación de un cliente DynamoDB en la región "us-east-1"

export const handler = async (event) => {
  try {
    const { id } = event.queryStringParameters;

    // Obtención del parámetro "id" de la cadena de consulta del evento

    // Verificar si el ID está presente
    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Falta el parámetro "id".' }),
      };
    }

    // Si no se proporciona el parámetro "id" en la cadena de consulta, devuelve una respuesta con un código de estado 400 (solicitud incorrecta) y un mensaje de error en formato JSON

    const getCommand = new GetCommand({
      TableName: "productos",
      Key: {
        id: id,
      },
    });

    // Crea un nuevo comando de consulta (GetCommand) para obtener el elemento de la tabla "productos" de DynamoDB, utilizando el ID proporcionado en la cadena de consulta

    const { Item: producto } = await dynamo.send(getCommand);

    // Envía el comando de consulta a DynamoDB y obtiene el resultado

    // Verificar si el producto existe
    if (!producto) {
      return {
        statusCode: 404,
        body: JSON.stringify({ message: 'El producto no existe.' }),
      };
    }

    // Si no se encuentra ningún producto con el ID proporcionado, devuelve una respuesta con un código de estado 404 (no encontrado) y un mensaje de error en formato JSON

    return {
      statusCode: 200,
      body: JSON.stringify(producto),
    };

    // Devuelve una respuesta con un código de estado 200 (éxito) y el producto encontrado como cuerpo de la respuesta en formato JSON

  } catch (error) {
    console.error(error);

    // Si ocurre un error durante el proceso, se muestra el mensaje de error en la consola

    return {
      statusCode: 500,
      body: JSON.stringify({ message: error.message }),
    };

    // Devuelve una respuesta con un código de estado 500 (error interno del servidor) y el mensaje de error como cuerpo de la respuesta en formato JSON
  }
};
