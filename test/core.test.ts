/*
 * core 模块测试用例
 */
import { generateUUID } from "../libs/core";

/*
 * generateUUID 测试用例
 */
test("generateUUID test", () => {
  expect(generateUUID()).toMatch(new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i));
});
