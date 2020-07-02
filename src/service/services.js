import Axios from 'axios'
import { getAuthToken, removeToken } from '../utils/auth'

export default (parentUrl = '') => {
  const access_token = getAuthToken()

  console.log(`${parentUrl}`)
  let api

  if (
    window.location.pathname === '/sign-in' ||
    window.location.pathname === '/sign-up'
  ) {
    api = Axios.create({
      baseURL: `http://localhost:1337${parentUrl}`,
      headers: {
        'Content-type': 'application/json'
      }
    })
  } else {
    api = Axios.create({
      baseURL: `http://localhost:1337${parentUrl}`,
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-type': 'application/json'
      }
    })
  }

  api.interceptors.response.use(
    function(response) {
      return response
    },
    function(error) {
      console.log(error.response.data)
      if (
        error.response.data.statusCode === 401 ||
        error.response.data.statusCode === 403
      ) {
        removeToken()
        window.location = '/sign-in'
      }
      return Promise.reject(error)
    }
  )
  const get = async (url, params = {}) => {
    return await api.get(url, params)
  }

  const post = async (url, data = {}) => {
    return await api.post(url, data)
  }

  const put = async (url, data = {}) => {
    return await api.put(url, data)
  }

  return {
    get,
    post,
    put
  }
}
