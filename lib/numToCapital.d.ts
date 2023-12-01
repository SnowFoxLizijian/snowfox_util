/**
 * 0 中文阿拉伯数字
 * 1 中文大写阿拉伯数字
 */
type numToCapitalType = 0 | 1;
export declare function numToCapital(num: string | number, type?: numToCapitalType): string;
export default numToCapital;
