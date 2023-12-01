type item = any
const getItem = (arr:any[], key: string, value: unknown, children?: string): item => {
  for (const item of arr) {
    if (item[key] === value) {
      return item
    }
    if (children) {
      if (Array.isArray( item[children] ) && item[children].length) {
        const i = getItem( item[children], key, value, children )
        if (i) {
          return i
        }
      }
    }
  }
}
export default getItem
