import numToCapital from './numToCapital'

import rules from './rules'

rules.promulgator('format', /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g)
const $ = (date:Date) => {
  const $Y = date.getFullYear()
  const $M = date.getMonth()
  const $D = date.getDate()
  const $W = date.getDay()
  const $H = date.getHours()
  const $m = date.getMinutes()
  const $s = date.getSeconds()
  const $ms = date.getMilliseconds()
  return {
    $Y,
    $M,
    $D,
    $W,
    $H,
    $m,
    $s,
    $ms
  }
}


type DateType = Date | string

export const Time = (date: DateType, type: string = 'YYYY-MM-DD'): string => {
  const time:Date = new Date(date)
  const { $Y, $M, $D, $W, $H, $m, $s, $ms } = $(time)
  // type占位符存储
  const matches:{[key: string]: string} = {
    // 年 后两位
    YY: String($Y).slice(-2),
    //  年
    YYYY: String($Y),
    // 月
    M: String($M + 1),
    // 月补0
    MM: String($M + 1).padStart(2, '0'),
    // 日
    D: String($D),
    // 日补0
    DD: String($D).padStart(2, '0'),
    // 1
    d: String($W),
    // 周一
    dd: String(numToCapital($W)).padStart(2 , '周'),
    // 星期一
    ddd: String(numToCapital($W)).padStart(3 , '星期'),
    // 24小时
    H: String($H),
    HH: String($H).padStart(2, '0'),
    // 12小时
    h: String($H % 12),
    hh: String($H % 12).padStart(2, '0'),
    // 分
    m: String($m),
    mm: String($m).padStart(2, '0'),
    // 秒
    s: String($s),
    ss: String($s).padStart(2, '0'),
    // 毫秒
    sss: String($ms).padStart(3, '0')
  }
  return type.replace(rules.subscriber('format'), (match, i) => {
    return i || matches[match]
  })
}


export default Time
