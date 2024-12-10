/*
 * libs-test 模块测试用例
 */
import { desensitizeStr } from "../libs/string";

/*
 * desensitizeStr 测试用例
 */
test("desensitizeStr test", () => {
  // 测试边界
  expect(desensitizeStr("", 0, 1)).toEqual("");
  // 测试异常情况 start < 0
  expect(desensitizeStr("123", -1, 1)).toEqual("**3");
  // 测试异常情况 end >= length
  expect(desensitizeStr("123", 0, 4)).toEqual("***");
  // 测试异常情况 start > end
  expect(desensitizeStr("123", 4, 3)).toEqual("123");
  // 测试正常情况
  expect(desensitizeStr("12345678", 1, 3)).toEqual("1***5678");
  // 测试正常情况-第四个参数更改
  expect(desensitizeStr("12345678", 1, 3, "?")).toEqual("1???5678");
});
