// jsonp
import originJSONP from 'jsonp'
export default function (url, data, option) {
  url += (url.indexOf('?') < 0 ? '?' : '$') + param(data)
  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param (data) {
  let url = ''
  for (const k in data) {
    let value = data[k] === undefined ? '' : data[k]
    url += `&${k}=${window.encodeURIcomponent(value)}`
  }
  return url ? url.substring(1) : ''
}
