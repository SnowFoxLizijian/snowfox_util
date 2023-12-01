"use strict";
exports.__esModule = true;
exports.format = void 0;
var $ = function (date) {
    var $Y = date.getFullYear();
    var $M = date.getMonth();
    var $D = date.getMonth();
    var $W = date.getDay();
    var $H = date.getHours();
    var $m = date.getMinutes();
    var $s = date.getSeconds();
    var $ms = date.getMilliseconds();
    return {
        $Y: $Y,
        $M: $M,
        $D: $D,
        $W: $W,
        $H: $H,
        $m: $m,
        $s: $s,
        $ms: $ms
    };
};
var format = function (date, type) {
    if (type === void 0) { type = 'YYYY-MM-DD'; }
    var time = new Date(date);
    var _a = $(time), $Y = _a.$Y, $M = _a.$M, $D = _a.$D, $W = _a.$W, $H = _a.$H, $m = _a.$m, $s = _a.$s, $ms = _a.$ms;
    // type占位符存储
    var matches = {
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
        DD: String($D + 1).padStart(2, '0'),
        // 星期一 1
        d: '',
        // 星期一 周一
        dd: '',
        // 星期一
        ddd: '',
        H: '',
        HH: '',
        h: '',
        hh: '',
        m: '',
        mm: '',
        s: '',
        ss: '',
        sss: ''
    };
    return '';
};
exports.format = format;
console.log(123456);
