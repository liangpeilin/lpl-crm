// 整合modules资源
const model2deal = state => {
  return state.user.sex + state.system.pid
}
const model2deal2 = state => {
  return state.user.password + state.system.pid + 'ioiaodsifoasf'
}
export {
  model2deal,
  model2deal2
}
