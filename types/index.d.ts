// 基础类型
export type PrimitiveType = string | number | boolean | bigint | null | undefined | symbol;

// 选项类型
export type Options = { value: string | number; label: string };

export * from "./array";
export * from "./core";
export * from "./is";
