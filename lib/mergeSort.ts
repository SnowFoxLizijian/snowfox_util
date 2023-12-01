
const mergeSort = (arr: number[]): number[] => {
  function merger (left:number[], right:number[]) :number[] {
    const result: number[] = []
    while (left.length>0&&right.length>0) {
      // 左右数组中的最小元素中选择较小的元素
      if (left[0]<=right[0]) {
        result.push( left.shift() as number )
      } else {
        result.push( right.shift() as number )
      }
    }
    return [...result, ...left, ...right]
  }
  if (arr.length<2) return arr
  const mid: number = Math.floor(arr.length/2)
  const left: number[] = arr.slice(0,mid)
  const right: number[] = arr.slice(mid)
  return merger(mergeSort(left),mergeSort(right))
}
export default mergeSort
