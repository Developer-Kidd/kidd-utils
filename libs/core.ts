/*
 * 常用的工具类函数
 * author: zhijie
 */

type Options = { label: unknown; value: unknown };

/*
 * 转换成Option类型数组
 */
export const transToOptions = (arr: any[], labelField: string, valueField: string): Options[] => {
  if (!arr || !arr.length) return [];
  return (
    arr.map(item => {
      return { label: item[labelField] ?? "", value: item[valueField] ?? "" };
    }) ?? []
  );
};

/*
 * 对象重置
 * @targetObj: 需要操作的对象 @defaultValMap：重置默认值
 */
export const handleReset = (targetObj: Record<string, unknown>, defaultValMap?: Record<string, unknown>) => {
  const keys: string[] = Object.keys(targetObj); // 获取目标对象所有的key
  keys.forEach(key => {
    const tempData: unknown = targetObj[key];
    targetObj[key] =
      defaultValMap && defaultValMap[key]
        ? defaultValMap[key]
        : Array.isArray(tempData)
          ? []
          : typeof tempData === "string"
            ? ""
            : typeof tempData === "number"
              ? 0
              : typeof tempData === "boolean"
                ? false
                : "";
  });
};
