function getAllKeys<T = any[]>(arr:T, key: string, children: string = 'children', result: any[] = []) :any[]{
  if (Array.isArray(arr)) {
    arr.forEach((item: any) => {
      result.push(item[key])
      if (children) {
        if (item[children] && item[children].length) {
          getAllKeys(item[children], key, children, result)
        }
      }
    })
    return result
  }
  return []
}
export default getAllKeys
