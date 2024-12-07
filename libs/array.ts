/*
 * 数组相关处理方法
 * author: zhijie
 */

/*
 * 数组去重
 * @arr: 需要去重的数组 @valueField: 用于去重的字段-数组里面内容是对象的则必填
 */
export const uniqueArray = (arr: unknown[], valueField?: string): unknown[] => {
  const res: unknown[] = [];
  if (!Array.isArray(arr) || !arr || !arr.length) return res;
  const map = new Map(); // 记录已有数据

  for (let i = 0, len = arr.length; i < len; i++) {
    const item: unknown = arr[i];
    // 对象类型处理
    if (item instanceof Object) {
      if (!valueField) return arr; // 对象但是不存在用于判断的字符直接返回
      if (!map.has((item as Record<string, unknown>)[valueField])) {
        res.push(item);
        map.set((item as Record<string, unknown>)[valueField], true);
      }
    }
    // 普通对象处理
    else {
      if (!map.has(item)) {
        res.push(item);
        map.set(item, true);
      }
    }
  }

  return res;
};

/*
 * 获取数组第一个数据，没有数据则返回默认值
 * @arr:需要处理的数组 @defaultVal:默认值
 */
export const getFirst = (arr: unknown[] = [], defaultVal?: unknown): unknown => {
  let res: unknown = defaultVal ?? "";
  if (arr?.length) {
    res = arr[0];
  }
  return res;
};

/*
 * 获取数组最后一个数据，没有数据则返回默认值
 * @arr:需要处理的数组 @defaultVal:默认值
 */
export const getLast = (arr: unknown[] = [], defaultVal?: unknown): unknown => {
  let res: unknown = defaultVal ?? "";
  if (arr?.length) {
    res = arr[arr.length - 1];
  }
  return res;
};
