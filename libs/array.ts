/*
 * 数组相关处理方法
 * author: zhijie
 */
import { PrimitiveType } from "../types/index";

/*
 * 数组去重(仅能判断基本类型)
 */
export const uniqueArray = (arr: PrimitiveType[] = []): PrimitiveType[] => {
  const res: PrimitiveType[] = [];
  if (!Array.isArray(arr) || !arr || !arr.length) return res;
  const map = new Map(); // 记录已有数据
  arr.forEach(item => {
    if (!map.has(item)) {
      res.push(item);
      map.set(item, true);
    }
  });
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
