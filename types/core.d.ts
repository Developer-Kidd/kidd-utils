import { Options } from "./index";

export type transToOptions = <T>(arr: T[], labelField: string, valueField: string) => Options[];
export type handleReset = (targetObj: Record<string, unknown>, defaultValMap?: Record<string, unknown>) => void;
