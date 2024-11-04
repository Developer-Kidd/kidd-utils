/*
 * 浏览器storage相关
 */

/*
 * 将内容设置到storage中
 * key: 键名 value: 值 storageName:存储区域
 * @return 是否操作成功
 */
export const setStorageItem = (
  key: string,
  value: unknown,
  storageName: "localStorage" | "sessionStorage" = "localStorage"
): boolean => {
  if (!window[storageName]) return false;
  window[storageName].setItem(key, JSON.stringify(value));
  return true;
};

/*
 * 将内容设置到storage中(带过期时间)
 * key: 键名 value: 值 storageName:存储区域 expireTime
 * @return 是否操作成功
 */
export const setExpireStorageItem = (
  key: string,
  value: unknown,
  storageName: "localStorage" | "sessionStorage" = "localStorage",
  expireTime?: number
): boolean => {
  if (!window[storageName]) return false;
  const temp: Record<string, unknown> = {
    value: value, // 存储的值
    expireTime: expireTime ? new Date().getTime() + expireTime : null // 过期时间
  };
  window[storageName].setItem(key, JSON.stringify(temp));
  return true;
};

/*
 * 从storage中取值
 * key: 键名 storageName:存储区域
 * @return 对应的值或null
 */
export const getStorageItem = <T>(key: string, storageName: "localStorage" | "sessionStorage" = "localStorage"): T | null => {
  if (!window[storageName]) return null;
  const value = window[storageName].getItem(key);
  if (value && value != "undefined" && value != "null") {
    return <T>JSON.parse(value);
  }
  return null;
};

/*
 * 从storage中取值
 * key: 键名 storageName:存储区域
 * @return 对应的值或null
 */
export const getExpireStorageItem = <T>(
  key: string,
  storageName: "localStorage" | "sessionStorage" = "localStorage"
): T | null => {
  if (!window[storageName]) return null;
  const value: string | null = window[storageName].getItem(key);
  if (value) {
    const storageData: any = JSON.parse(value); // 反序列化数据
    if (!storageData.expireTime || new Date().getTime() < storageData.expireTime) {
      // 如果没有过期或者还没有过期
      return storageData.value; // 返回存储的值
    } else {
      window[storageName].removeItem(key); // 如果已经过期，则删除该项
    }
  }
  return null;
};

/*
 * 从storage中移除对应的值
 * key: 键名 storageName:存储区域
 * @return 是否操作成功
 */
export const removeStorageItem = (key: string, storageName: "localStorage" | "sessionStorage" = "localStorage"): boolean => {
  if (!window[storageName] || !window[storageName].getItem(key)) return false;
  window[storageName].removeItem(key);
  return true;
};

/*
 * 从storage中移除对应的值
 * storageName:存储区域 如果不传storageName默认所有storage清除
 */
export const clearStorage = (storageName?: "localStorage" | "sessionStorage") => {
  if (!storageName) {
    window.localStorage.clear();
    window.sessionStorage.clear();
  } else {
    window[storageName].clear();
  }
};
