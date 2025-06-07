import { APIGatewayProxyHandler } from 'aws-lambda';
import { getAllUsers } from '@/services/userService';

export const handler: APIGatewayProxyHandler = async (_event) => {
  const users = await getAllUsers();

  return {
    statusCode: 200,
    body: JSON.stringify(users),
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
