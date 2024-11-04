/*
 * libs-test 模块测试用例
 */
import { isNumber, isString, isNotEmpty, isMobile, isFixedPhone, isPositiveInteger, isIdCardNo, isEmoji } from "../libs/is";

/*
 * isNumber 测试用例
 */
test("isNumber test", () => {
  expect(isNumber("1")).toBe(false);
  expect(isNumber(true)).toBe(false);
  expect(isNumber(null)).toBe(false);
  expect(isNumber(undefined)).toBe(false);
  expect(isNumber(Symbol(1))).toBe(false);
  expect(isNumber(1)).toBe(true);
  expect(isNumber(new Number(1))).toBe(true);
});

/*
 * isString 测试用例
 */
test("isString test", () => {
  expect(isString(new String("1"))).toBe(true);
  expect(isString("1")).toBe(true);
  expect(isString(true)).toBe(false);
  expect(isString(null)).toBe(false);
  expect(isString(undefined)).toBe(false);
  expect(isString(Symbol(1))).toBe(false);
  expect(isString(1)).toBe(false);
});

/*
 * isNotEmpty 判断是否为空
 */
test("isNotEmpty test", () => {
  expect(isNotEmpty(1)).toBe(true);
  expect(isNotEmpty("1")).toBe(true);
  expect(isNotEmpty({ a: 1 })).toBe(true);
  expect(isNotEmpty(null)).toBe(false);
  expect(isNotEmpty(undefined)).toBe(false);
  expect(isNotEmpty(false)).toBe(false);
  expect(isNotEmpty({})).toBe(false);
  expect(isNotEmpty([])).toBe(false);
});

/*
 * isMobile 判断是否电话号码
 */
test("isMobile test", () => {
  expect(isMobile("")).toBe(false);
  expect(isMobile(1372600)).toBe(false);
  expect(isMobile("13570484390")).toBe(true);
  expect(isMobile(13570484490)).toBe(true);
});

/*
 * isFixedPhone 判断是否固话
 */
test("isFixedPhone test", () => {
  expect(isFixedPhone("")).toBe(false);
  expect(isFixedPhone(123456)).toBe(false);
  expect(isFixedPhone("123456")).toBe(false);
  expect(isFixedPhone("020-84878689")).toBe(true);
  expect(isFixedPhone("84878689")).toBe(true);
  expect(isFixedPhone(84878689)).toBe(true);
});

/*
 * isPositiveInteger 判断是否正整数
 */
test("isPositiveInteger test", () => {
  expect(isPositiveInteger("")).toBe(false);
  expect(isPositiveInteger(0)).toBe(false);
  expect(isPositiveInteger("-50")).toBe(false);
  expect(isPositiveInteger(-50)).toBe(false);
  expect(isPositiveInteger(1000)).toBe(true);
  expect(isPositiveInteger("1000")).toBe(true);
});

/*
 * isIdCardNo 判断是否身份证号码
 */
test("isIdCardNo test", () => {
  expect(isIdCardNo("")).toBe(false);
  expect(isIdCardNo("123456")).toBe(false);
  expect(isIdCardNo("4401261199403067616")).toBe(false);
  expect(isIdCardNo("34010319880910567X")).toBe(false);
});

/*
 * isEmoji 判断是否表情等特殊字符
 */
test("isEmoji test", () => {
  expect(isEmoji("")).toBe(false);
  expect(isEmoji("123")).toBe(false);
  expect(isEmoji("asd*efg")).toBe(false);
  expect(isEmoji("🔪")).toBe(true);
  expect(isEmoji("➕")).toBe(true);
});
