import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import { getAllUsers } from '@/services/userService'

const app = new Hono()

app.get('/users', async (c) => {
  const users = await getAllUsers();
  return c.json(users);
});

export const handler = handle(app)
