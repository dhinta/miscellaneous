export function useCookie() {
  return {
    getCookie(token: string): string | null {
      const cookies = Object.fromEntries(
        document.cookie.split('; ').map((v) => v.split(/=(.*)/s).map(decodeURIComponent)),
      );
      return cookies[token] || null;
    },
    setCookie(token: string, value: string, days: number) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = `${token}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax;`;
    },
    hasCookie(token: string): boolean {
      return document.cookie.includes(token);
    },
  };
}
