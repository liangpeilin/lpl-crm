import axios from 'axios'
const getUserData = params => {
  return axios.post(`baiduMusic`, params).then(res => console(res.data)).catch(error => console.log(error))
}
export {
  getUserData
}
