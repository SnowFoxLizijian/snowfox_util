# snowfox-utils
当前最新版本: 1.0
## components
#### numToCapital
* 将数字转化为中文大写汉字
  * 参数1 数字或者带有逗号的字符数字
  * 参数2 0或1 
    * 1: 零壹贰叁肆伍陆柒捌玖拾
    * 0: 零一二三四五六七八九十
#### rules
* 正则类
* 方法
  * getRules 返回正则对象
  * promulgator 写入正则
    * 参数1 对象的key 字符串类型 (如果和正则类的对象池中的key相同则替换掉原先的)
    * 参数2 对象的value 正则类型
  * subscriber 返回对应的key的正则
    * 参数1 正则对象的key 字符串类型
* 默认正则对象
  * empty 匹配空行
  * phone 匹配手机号
  * chineseName: 匹配中文姓名
  * englishName: 匹配英文姓名
  * number: 匹配数字
  * idNumber: 匹配身份证号
  * email: 匹配邮箱
  * url: 匹配网址
  * base64: 匹配base64格式
  * bankCard: 匹配银行卡号
  * html: 匹配html标签
  * UppercaseEnglish: 匹配大写英文
  * UnderwriteEnglish: 匹配小写英文
  * english: 匹配英文
  * password: 匹配密码 至少一个大写一个小写一个数字一个特殊字符, 最少六位,
  * username: 匹配4到16位的用户名
  * wxCard: 匹配微信号
  * notEnglish: 匹配不包含字母
  * chineseOrNumber: 匹配中文或数字
#### getItem
* 获取数组对象中的元素, 向下递归
  * 参数1
    * 数组对象
  * 参数2
    * 对象的key string类型
  * 参数3
    * 对象的value 任意类型
  * 参数4 可选
    * 对象如果有子数组要查找 子数组key string类型
#### deepCopy
* 深拷贝
  * 参数1: Object类型
#### mergeSort
* 归并排序
  * 参数1: 数字数组
#### time
* 时间格式化
  * 参数1: 日期类型或者日期字符串
  * 参数2: 格式化字符
#### colorConVersion
* RGB格式转换16进制颜色
  * 参数1: R
  * 参数2: G
  * 参数3: B
#### randomColor
* 返回随机16进制颜色
#### getUrl
* 获取当前网址路径参数返回键值对类型
#### getAllKeys
* 根据key 获取数组对象中所有的key值
  * 参数1 数组对象
  * 参数2 要查找的key
  * 参数3 数组对象中的子数组 默认为children
  * 返回 数组
