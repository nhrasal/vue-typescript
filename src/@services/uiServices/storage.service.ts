export const isBrowser = typeof window !== "undefined";
export const isServer = typeof window == "undefined";

export const LocalStorageService = {
  set: (key: string, value: any): void => {
    if (isBrowser) {
      localStorage.setItem(key, value);
    }
  },
  get: (key: string): string | null => {
    if (isBrowser) {
      return localStorage.getItem(key);
    } else {
      return null;
    }
  },
  delete: (key: string): void => {
    if (isBrowser) {
      localStorage.removeItem(key);
    }
  },
  clear: (): void => {
    if (isBrowser) {
      localStorage.clear();
    }
  },
};