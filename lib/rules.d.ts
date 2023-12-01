interface RuleArrType {
    [key: string]: RegExp;
}
declare class Rules {
    private rule;
    promulgator(key: string, value: RegExp): void;
    subscriber(key: string): RegExp;
    /**
     * @function getRules 查找所有的校验规则
     */
    getRules(): RuleArrType;
}
declare const rules: Rules;
export default rules;
