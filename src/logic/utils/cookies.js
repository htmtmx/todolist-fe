export function getCookieClient(cookieToFind) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === cookieToFind) {
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}

export function setCookieClient(cookieName, cookieValue, path) {
  document.cookie = `${cookieName}=${cookieValue}; path=${path || "/"}`
}