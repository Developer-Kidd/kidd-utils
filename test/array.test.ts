/*
 * array 模块测试用例
 */
import { uniqueArray, getFirst, getLast, transToObj } from "../libs/array";

/*
 * uniqueArray 测试用例
 */
test("uniqueArray test", () => {
  // 测试空值
  expect(uniqueArray([])).toEqual([]);
  // 测试正常数据
  expect(uniqueArray(["1", "2", "3", "3"])).toEqual(["1", "2", "3"]);
  // 测试不重复数据
  expect(uniqueArray(["1", "2", "3"])).toEqual(["1", "2", "3"]);
  // 测试复杂数组类型-正常数据
  expect(
    uniqueArray(
      [
        { a: 1, b: 2, c: 3 },
        { a: 1, b: 3, c: 4 },
        { a: 2, b: 4, c: 5 },
        { a: 3, b: 4, c: 5 }
      ],
      "a"
    )
  ).toEqual([
    { a: 1, b: 2, c: 3 },
    { a: 2, b: 4, c: 5 },
    { a: 3, b: 4, c: 5 }
  ]);
  // 测试负载数据，不传第二个参数的情况
  expect(
    uniqueArray([
      { a: 1, b: 2, c: 3 },
      { a: 1, b: 3, c: 4 },
      { a: 2, b: 4, c: 5 },
      { a: 3, b: 4, c: 5 }
    ])
  ).toEqual([
    { a: 1, b: 2, c: 3 },
    { a: 1, b: 3, c: 4 },
    { a: 2, b: 4, c: 5 },
    { a: 3, b: 4, c: 5 }
  ]);
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

/*
 * transToObj 测试用例
 */
test("transToObj test", () => {
  // 测试空值
  expect(transToObj([])).toEqual({});
  // 测试正常数据-默认值
  expect(transToObj(["a", "b", "c"])).toEqual({ a: true, b: true, c: true });
  // 测试正常数据- 第二个参数测试
  expect(transToObj(["a", "b", "c"], "test")).toEqual({ a: "test", b: "test", c: "test" });
  // 测试正常数据- 第三个参数测试
  expect(
    transToObj(
      [
        { a: 1, value: "code1" },
        { b: 2, value: "code2" },
        { c: 3, value: "code3" }
      ],
      true,
      "value"
    )
  ).toEqual({ code1: true, code2: true, code3: true });
});
