/*
 * 类型判断
 * author: zhijie
 */

/*
 * 判断是否数字类型
 */
export const isNumber = (val: unknown): boolean => {
  return typeof val === "number" || Object.prototype.toString.call(val) === "[object Number]";
};

/*
 * 判断是否字符串类型
 */
export const isString = (val: unknown): boolean => {
  return typeof val === "string" || Object.prototype.toString.call(val) === "[object String]";
};

/*
 * 是否不为空
 */
export const isNotEmpty = (val: unknown): boolean => {
  if (!val && val !== 0) return false; // null/undefined/0/false/''
  if (Array.isArray(val) && !val.length) return false; // 空数组
  if (Object.prototype.toString.call(val) === "[object Object]" && !Object.keys(val).length) return false; // 不是空对象
  return true;
};

/*
 * 是否电话号码
 */
export const isMobile = (val: string | number): boolean => {
  if (!val || (typeof val !== "string" && typeof val !== "number")) return false;
  const regExp: RegExp = /^1[3-9]\d{9}$/;
  return regExp.test(val as string);
};

/*
 * 是否固定电话
 */
export const isFixedPhone = (val: string | number): boolean => {
  if (!val || (typeof val !== "string" && typeof val !== "number")) return false;
  const regExp = /^(\d{3,4}[- ]?)?\d{7,8}$/;
  return regExp.test(val as string);
};

/*
 * 是否正整数
 */
export const isPositiveInteger = (val: string | number): boolean => {
  const num = Number(val); // 将输入转换为数字
  return !isNaN(num) && num > 0 && num % 1 === 0;
};

/*
 * 是否身份证号码
 */
export const isIdCardNo = (val: string): boolean => {
  // 校验
  if (!val || val.length !== 18) return false; // 校验位数
  // 校验是否为全数字
  if (!/^\d{18}$/.test(val)) {
    return false;
  }
  const checkCode: string = "10X98765432"; // 校验码
  // 提取前17位数字
  const baseId: string = val.slice(0, 17);

  // 校验出生年月日
  const year: string = baseId.slice(6, 4);
  const month: string = baseId.slice(10, 2);
  const day: string = baseId.slice(12, 2);
  if (!/^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/.test(year + month + day)) {
    return false;
  }
  // 计算校验码
  let sum: number = 0;
  for (let i = 0; i < 17; i++) {
    sum += parseInt(baseId.charAt(i), 10) * (i % 2 === 0 ? 1 : 3);
  }
  // 计算模
  const mod: number = sum % 11;
  // 校验最后一位
  return checkCode.charAt(mod) === val.charAt(17).toUpperCase();
};

/*
 * 特殊符号校验
 */
export const isEmoji = (val: string): boolean => {
  const emojiRegex =
    /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F910}-\u{1F96B}\u{1F980}-\u{1F991}]/u;
  return emojiRegex.test(val);
};
