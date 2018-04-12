// 在slider组件添加slider-item类
export function addClass (el, className) {
  console.log('el.className: ', el.className)
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  console.log('newClass: ', newClass)
  newClass.push(className)
  el.className = newClass.join(' ')
}
export function hasClass (el, className) {
  // \\原因是字符串需要转义
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}