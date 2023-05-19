import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand} from "@aws-sdk/lib-dynamodb";
import {randomUUID}  from "crypto";

const dynamo = DynamoDBDocumentClient.from(new DynamoDBClient({ region: "us-east-1" }));

export const handler = async(event) => {
   try{
    const producto =JSON.parse(event.body);
    const newProducto = { 
        ...producto,
        id: randomUUID(),
        fechaIngreso: new Date().toLocaleDateString(),
    };

    await dynamo.send(new PutCommand({
        TableName: "productos",
        Item: newProducto,
    }));

    return  { statusCode: 201,
        body: JSON.stringify(newProducto)
    };

   }catch(error) {
    console.error(error);
    return {statusCode: 500,
        body:JSON.stringify({message: error.message}) };
   }
};
