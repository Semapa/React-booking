import axios from 'axios'
import configFile from '../config.json'
import localStorageService from './localStorage.service'
// import authService from './auth.service'

const http = axios.create({
  baseURL: configFile.apiEndpoint
})

http.interceptors.request.use(
  async function (config) {
    // const expiresDate = localStorageService.getTokenExpiresDate()
    // const refreshToken = localStorageService.getRefreshToken()
    // const isExpired = refreshToken && expiresDate < Date.now()

    // Если есть refresh token
    // if (isExpired) {
    //   // Возможно тут нужен url: https://securetoken.googleapis.com/v1/token
    //   const data = await authService.refresh()
    //   // Так как ключ значения одинаковые, то просто data
    //   localStorageService.setTokens({ data })
    // }

    const accessToken = localStorageService.getAccessToken()
    if (accessToken) {
      // Если есть токен добавляем в query параметры auth
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`
      }
    }
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

const httpService = {
  get: http.get,
  post: http.post
}

export default httpService
