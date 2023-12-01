function getUrl<T = any> ():T {
  return Object.fromEntries(new URLSearchParams(window.location.search)) as T
}
export default getUrl
