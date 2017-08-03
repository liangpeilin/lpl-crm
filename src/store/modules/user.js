const state = {
  name: 'lpl',
  password: 'man',
  remember: false,
  email: '2267341137@.com'
}
const getters = {
  getUser: (state) => { return state }
}
const mutations = {
  // 设置v-model的user各项属性
  // 传入额外的参数，即 mutation 的 载荷（payload）：
  // user_property: 用户属性
  // user_value:用户属性值
  set_user: (state, payload) => {
    state[payload.user_property] = payload.user_value
  }
}
const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
