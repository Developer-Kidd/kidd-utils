/*
 * array 模块测试用例
 */
import { uniqueArray, getFirst, getLast } from "../libs/array";

/*
 * uniqueArray 测试用例
 */
test("uniqueArray test", () => {
  // 测试空值
  expect(uniqueArray()).toEqual([]);
  // 测试正常数据
  expect(uniqueArray(["1", "2", "3", "3"])).toEqual(["1", "2", "3"]);
  // 测试不重复数据
  expect(uniqueArray(["1", "2", "3"])).toEqual(["1", "2", "3"]);
});

/*
 * getFirst 测试用例
 */
test("getFirst test", () => {
  // 测试返回默认值
  expect(getFirst([], "test")).toEqual("test");
  // 测试没有默认值
  expect(getFirst([])).toEqual("");
  // 测试正常返回
  expect(getFirst(["1", "2", "3"])).toEqual("1");
});

/*
 * getLast 测试用例
 */
test("getLast test", () => {
  // 测试返回默认值
  expect(getLast([], "test")).toEqual("test");
  // 测试没有默认值
  expect(getLast([])).toEqual("");
  // 测试正常返回
  expect(getLast(["1", "2", "3"])).toEqual("3");
  // 测试不同类型
  expect(getLast(["test", "test2", "test3"])).toEqual("test3");
  // 测试不同类型
  expect(getLast([{ a: 1, b: 2 }, "test2", { a: 1, b: 2, c: 3 }])).toEqual({ a: 1, b: 2, c: 3 });
});
