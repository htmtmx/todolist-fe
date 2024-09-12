import { env } from "@/config/env";

export const userInfoUrls = {
  'login': `${env.EXPRESS_API_USERS_URL}`,
  'register': `${env.EXPRESS_API_USERS_URL}/new`,
  'renew': `${env.EXPRESS_API_USERS_URL}/renew`,
};