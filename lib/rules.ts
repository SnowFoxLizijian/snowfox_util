interface RuleArrType {
  [key:string]: RegExp
}

class Rules {
  private rule:RuleArrType = {
    empty: /^\s*(?=\r?$)\n/,
    phone: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
    chineseName: /^(?:[\u4e00-\u9fa5·]{2,16})$/,
    englishName: /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/,
    number: /^\d{1,}$/,
    idNumber: /(^\d{8}(0\d|10|11|12)([0-2]\d|30|31)\d{3}$)|(^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$)/,
    email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/,
    url: /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
    base64: /^\s*data:(?:[a-z]+\/[a-z0-9-+.]+(?:;[a-z-]+=[a-z0-9-]+)?)?(?:;base64)?,([a-z0-9!$&',()*+;=\-._~:@/?%\s]*?)\s*$/i,
    bankCard: /^[1-9]\d{9,29}$/,
    html: /<(\w+)[^>]*>(.*?<\/\1>)?/,
    UppercaseEnglish: /^[A-Z]+$/,
    UnderwriteEnglish: /^[a-z]+$/,
    english: /^[a-zA-Z]+$/,
    password: /^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/,
    username: /^[a-zA-Z0-9_-]{4,16}$/,
    wxCard: /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/,
    notEnglish: /^[^A-Za-z]*$/,
    chineseOrNumber: /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/
  }
  // 发布
  public promulgator(key: string, value: RegExp):void {
    this.rule[key] = value
  }
  // 订阅
  public subscriber(key: string) :RegExp{
    return this.rule[key]
  }
  /**
   * @function getRules 查找所有的校验规则
   */
  public getRules(): RuleArrType {
    return this.rule
  }
}
const rules:Rules = new Rules()
export default rules
