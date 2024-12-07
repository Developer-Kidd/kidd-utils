type Options = {
    label: unknown;
    value: unknown;
};
export declare const transToOptions: (arr: any[], labelField: string, valueField: string) => Options[];
export declare const handleReset: (targetObj: Record<string, unknown>, defaultValMap?: Record<string, unknown>) => void;
export {};
