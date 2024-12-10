/*
 * string相关
 */

/*
 * 字符串脱敏操作
 * str: 需要处理的字符串, start: 开始位置 end: 结束位置 replaceChar:脱敏使用的字符
 */
export const desensitizeStr = (str: string, start: number, end: number, replaceChar: string = "*"): string => {
  if (!str || typeof str !== "string") return str;
  const length: number = str.length;
  // start/end边界校验
  if (start < 0) start = 0;
  if (end >= length) end = length - 1;
  if (start > end) return str;

  const visibleStart: string = str.slice(0, start);
  const visibleEnd: string = str.slice(end + 1);
  const hiddenPart: string = replaceChar.repeat(end - start + 1);

  return visibleStart + hiddenPart + visibleEnd;
};
