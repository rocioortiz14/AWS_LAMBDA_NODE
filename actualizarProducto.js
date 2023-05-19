import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1"})); 

export const handler = async (event) => {
    try {
        const  id  = event.queryStringParameters.id;
        const producto = JSON.parse(event.body);

        const updatedProducto = {
            ...producto,
            id: id,
        };

        await dynamo.send(new PutCommand({
            TableName: "productos",
            Item: updatedProducto,
        }));

        return {
            statusCode: 200,
            body: JSON.stringify(updatedProducto),
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
};
