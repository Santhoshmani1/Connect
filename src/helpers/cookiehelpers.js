export function setAccessTokenCookie(accessToken) {
  document.cookie = `token=${accessToken}; path=/;max-age=${86400 * 3}`;
}

export function getCookieValue(name) {
  const regex = new RegExp(`(^| )${name}=([^;]+)`);
  const match = document.cookie.match(regex);
  if (match) {
    return match[2];
  }
}
