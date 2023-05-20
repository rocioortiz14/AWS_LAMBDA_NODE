import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, ScanCommand } from "@aws-sdk/lib-dynamodb";

// Importación de módulos necesarios para interactuar con DynamoDB

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

// Creación de un cliente DynamoDB en la región "us-east-1"

export const handler = async (event) => {
  try {
    const scanCommand = new ScanCommand({
      TableName: "productos",
    });

    // Crea un nuevo comando de escaneo (ScanCommand) para obtener todos los elementos de la tabla "productos" de DynamoDB

    const { Items: productos } = await dynamo.send(scanCommand);

    // Envía el comando de escaneo a DynamoDB y obtiene los resultados

    return {
      statusCode: 200,
      body: JSON.stringify(productos),
    };

    // Devuelve una respuesta con un código de estado 200 (éxito) y los productos encontrados como cuerpo de la respuesta en formato JSON

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
