import { userInfoUrls } from "./urls";

export const login = async (user) => {
  const response = await fetch(userInfoUrls.login, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return await response.json();
}