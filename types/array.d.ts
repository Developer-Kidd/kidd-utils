/*
 * 数组去重(仅能判断基本类型)
 */
import { PrimitiveType } from "./index";

export type uniqueArray = (arr: PrimitiveType[]) => PrimitiveType[];
export type getFirst = (arr: unknown[], defaultVal?: unknown) => unknown;
export type getLast = (arr: unknown[], defaultVal?: unknown) => unknown;
