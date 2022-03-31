const TOKEN_KEY = 'jwt-token'
const REFRESH_KEY = 'jwt-refresh-token'
const EXPIRES_KEY = 'jwt-expires'
const USERID_KEY = 'user-local-id'
const IS_ADMIN = 'isAdmin'

export function setTokens({
  refreshToken,
  accessToken,
  userId,
  expiresIn = 3600
}) {
  // Трансформируем expiresIn из секунд в миллисекунды
  // и получаем TimeStamp времени в которое токен истечет
  const expiresDate = new Date().getTime() + expiresIn * 1000
  localStorage.setItem(USERID_KEY, userId)
  localStorage.setItem(TOKEN_KEY, accessToken)
  localStorage.setItem(REFRESH_KEY, refreshToken)
  localStorage.setItem(EXPIRES_KEY, expiresDate)
}

export function setIsAdmin({ isAdmin }) {
  localStorage.setItem(IS_ADMIN, isAdmin)
}

export function getAccessToken() {
  return localStorage.getItem(TOKEN_KEY)
}
export function getRefreshToken() {
  return localStorage.getItem(REFRESH_KEY)
}
export function removeAuthData() {
  localStorage.removeItem(USERID_KEY)
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(REFRESH_KEY)
  localStorage.removeItem(EXPIRES_KEY)
  localStorage.removeItem(IS_ADMIN)
}

export function getIsAdmin() {
  return localStorage.getItem(IS_ADMIN)
}

export function getTokenExpiresDate() {
  return localStorage.getItem(EXPIRES_KEY)
}
export function getUserId() {
  return localStorage.getItem(USERID_KEY)
}

const localStorageService = {
  setTokens,
  setIsAdmin,
  getAccessToken,
  getRefreshToken,
  getTokenExpiresDate,
  getUserId,
  getIsAdmin,
  removeAuthData
}

export default localStorageService
