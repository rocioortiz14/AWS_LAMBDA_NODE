import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

// Importación de módulos necesarios para interactuar con DynamoDB

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

// Creación de un cliente DynamoDB en la región "us-east-1"

export const handler = async (event) => {
    try {
        const id = event.queryStringParameters.id;

        // Obtención del parámetro "id" de la cadena de consulta del evento

        const producto = JSON.parse(event.body);

        // Analiza el cuerpo del evento y lo convierte en un objeto JSON

        const updatedProducto = {
            ...producto,
            id: id,
        };

        // Crea un nuevo objeto producto con el ID proporcionado en la cadena de consulta

        await dynamo.send(new PutCommand({
            TableName: "productos",
            Item: updatedProducto,
        }));

        // Envía un comando de actualización (PutCommand) a la tabla "productos" de DynamoDB, con el objeto producto actualizado como dato a actualizar

        return {
            statusCode: 200,
            body: JSON.stringify(updatedProducto),
        };

        // Devuelve una respuesta con un código de estado 200 (éxito) y el producto actualizado como cuerpo de la respuesta en formato JSON

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

