import { env } from "@/config/env";

export const todoInfoUrls = {
  'getTodos': `${env.EXPRESS_API_TODOS_URL}`,
  'addTodo': `${env.EXPRESS_API_TODOS_URL}`,
  'updateTodo': `${env.EXPRESS_API_TODOS_URL}/renew`,
  'deleteTodo': `${env.EXPRESS_API_TODOS_URL}`,
};