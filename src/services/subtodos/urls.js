import { env } from "@/config/env";

export const subtodosInfoUrls = {
  'getTodos': `${env.EXPRESS_API_SUBTODOS_URL}`,
  'getSubtodosByTodoID': `${env.EXPRESS_API_SUBTODOS_URL}/byTodoID`,
  'addTodo': `${env.EXPRESS_API_SUBTODOS_URL}/new`,
  'updateTodo': `${env.EXPRESS_API_SUBTODOS_URL}/renew`,
};