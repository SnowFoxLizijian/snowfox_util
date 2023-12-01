
function deepCopy (data: any, hash: WeakMap<WeakKey, any> = new WeakMap): any| {} {
  if (typeof data !== 'object' || data ===null) throw new TypeError('传入参数不是对象');
  if (hash.has(data)) return hash.get(data);
  const newData: any = {}
  const dataKeys: string[] = Object.keys(data)
  dataKeys.forEach((item) => {
    const currentDataValue = data[item]
    if (typeof currentDataValue !== 'object' || currentDataValue === null)
      // 基本元素的深拷贝
      newData[item] = currentDataValue
    else if (Array.isArray(currentDataValue))
      // 数组的深拷贝
      newData[item] = [...currentDataValue]
    else if (currentDataValue instanceof Set)
      // set的深拷贝
      newData[item] = new Set([...currentDataValue])
    else if (currentDataValue instanceof Map)
      newData[item] = new Map([...currentDataValue])
    else {
      hash.set(data,data)
      newData[item] = deepCopy(currentDataValue,hash)
    }
  })
  return newData

}
export default deepCopy
