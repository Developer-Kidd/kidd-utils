/*
 * core 模块测试用例
 */
import { transToOptions, generateUUID } from "../libs/core";

/*
 * transToOptions 测试用例
 */
test("transToOptions test", () => {
  // 测试空值
  expect(transToOptions([])).toEqual([]);
  // 测试正常值-不传2/3个参数
  expect(
    transToOptions([
      { a: 1, label: 1, value: 2 },
      { b: 2, label: 2, value: 3 }
    ])
  ).toEqual([
    { label: 1, value: 2 },
    { label: 2, value: 3 }
  ]);
  // 测试正常值-不传参数
  expect(
    transToOptions(
      [
        { a: 1, b: 2 },
        { a: 2, b: 3 }
      ],
      "a",
      "b"
    )
  ).toEqual([
    { label: 1, value: 2 },
    { label: 2, value: 3 }
  ]);
});

/*
 * generateUUID 测试用例
 */
test("generateUUID test", () => {
  expect(generateUUID()).toMatch(new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i));
});
