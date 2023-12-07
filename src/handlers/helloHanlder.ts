import { APIGatewayProxyEventV2, APIGatewayProxyResultV2 } from "aws-lambda";


export const hello = async (event: APIGatewayProxyEventV2): Promise<APIGatewayProxyResultV2> => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v1.0! Your function executed successfully!",
                input: event,
            },
            null,
            2,
        ),
    };
}