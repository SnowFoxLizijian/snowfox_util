/**
 * 0 中文阿拉伯数字
 * 1 中文大写阿拉伯数字
 */
type numToCapitalType = 0 | 1

export function numToCapital (num: string| number, type: numToCapitalType = 0): string {
  const numString: string = num.toString()
  if (numString.length) {
    // 有逗号去掉逗号
    const strNum: string = Number((num + '').replace(/[,，]*/g, '')) + ''
    let capitalAr: string = '零一二三四五六七八九十'
    let unitAr:string[] = ['十', '百', '千', '万', '十', '百', '千', '亿', '十', '百', '千']
    if (type === 1) {
      capitalAr = '零壹贰叁肆伍陆柒捌玖拾'
      unitAr = ['拾', '佰', '仟', '万', '拾', '佰', '仟', '亿', '拾', '佰', '仟'] // 单位
    }
    // 转换为整数
    const numNumber: number = parseInt(strNum)
    let index:number = strNum.length - 1 //记录位数
    let idx:number = 0 // 记录单位
    let percent:number = 10
    const arr: string[] = []

    const turnNum = (num: number, percent: number, index: number): boolean | void => {
      const unit: number = num / percent
      const capital: string = capitalAr[Number(strNum[index])]
      if (unit < 1) {
        arr.push(capital)
        // 出现11【一十一】这种情况
        if (
          Number(strNum[index]) === 1 &&
          (strNum.length === 2 || strNum.length === 6 || strNum.length === 10)
        ) {
          arr.pop()
        }
        // 结束递归
        return false
      }else {
        if (capital === '零') {
          // 万和亿单位不删除
          if (!['万', '亿'].includes(arr[arr.length - 1])) {
            arr.pop()
          }
          // 前面有零在删掉一个零
          if (arr[arr.length - 1] === '零') {
            arr.pop()
          }
        }
        arr.push(capital)
        // 过滤存在【零万】【零亿】这种情况
        if (['万', '亿'].includes(arr[arr.length - 2]) && capital === '零') {
          arr.pop()
        }
        // 过滤【1亿万】这种情况
        if (arr[0] === '万' && arr[1] === '亿') {
          arr.shift()
        }
        // 末尾【零】删掉
        if (arr[0] === '零') {
          arr.pop()
        }
        arr.push(unitAr[idx++])
        turnNum(num, percent * 10, --index)
      }
    }
    turnNum(numNumber, percent, index)
    return arr.reverse().join('')
  }
  return ''
}
export default numToCapital
