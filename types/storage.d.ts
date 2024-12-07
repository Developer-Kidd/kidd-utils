export declare const setStorageItem: (key: string, value: unknown, storageName?: "localStorage" | "sessionStorage") => boolean;
export declare const setExpireStorageItem: (key: string, value: unknown, storageName?: "localStorage" | "sessionStorage", expireTime?: number) => boolean;
export declare const getStorageItem: <T>(key: string, storageName?: "localStorage" | "sessionStorage") => T | null;
export declare const getExpireStorageItem: <T>(key: string, storageName?: "localStorage" | "sessionStorage") => T | null;
export declare const removeStorageItem: (key: string, storageName?: "localStorage" | "sessionStorage") => boolean;
export declare const clearStorage: (storageName?: "localStorage" | "sessionStorage") => void;
