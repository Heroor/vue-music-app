import Axios from 'axios'

export default function (url, data) {
  return new Promise((resolve, reject) => {
    Axios.get(url, data)
      .then((res) => {
        if (res.code === 0) {
          console.log('请求成功')
        } else {
          console.log('请求失败，code=' + res.code)
        }
      })
      .catch((err) => {
        console.log('请求数据失败', err)
      })
  })
}
