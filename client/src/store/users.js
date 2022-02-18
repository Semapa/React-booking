import { createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import localStorageService from '../services/localStorage.service'
import generateAuthError from '../utils/generateAuthError'
import history from '../utils/history'

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    // usersRequested: (state) => {
    //   state.isLoading = true
    // },
    // usersReceved: (state, action) => {
    //   state.entities = action.payload
    //   state.isLoading = false
    // },
    // usersRequestFailed: (state, action) => {
    //   state.error = action.payload
    //   state.isLoading = false
    // },
    authRequested: (state) => {
      state.error = null
    },
    authRequestSuccess: (state, action) => {
      state.auth = action.payload
      state.isLogggedIn = true
    },
    authRequestFailed: (state, action) => {
      state.error = action.payload
    },
    userLoggedOut: (state) => {
      state.entities = null
      state.isLogggedIn = false
      state.auth = null
      state.dataLoaded = false
    }
  }
})

const { reducer: usersReducer, actions } = usersSlice
const { authRequested, authRequestSuccess, authRequestFailed, userLoggedOut } =
  actions

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    const { email, password } = payload
    dispatch(authRequested())
    try {
      const data = await authService.login({ email, password })
      localStorageService.setTokens(data)
      dispatch(authRequestSuccess({ userId: data.userId }))
      history.push(redirect)
    } catch (error) {
      const { code, message } = error.response.data.error
      if (code === 400) {
        const errorMessage = generateAuthError(message)
        dispatch(authRequestFailed(errorMessage))
      } else {
        dispatch(authRequestFailed(error.message))
      }
    }
  }

export const signUp = (payload) => async (dispatch) => {
  dispatch(authRequested())
  try {
    const data = await authService.register(payload)
    localStorageService.setTokens(data)
    dispatch(authRequestSuccess({ userId: data.userId }))
    history.push('/')
  } catch (error) {
    const { code, message } = error.response.data.error
    if (code === 400) {
      const errorMessage = generateAuthError(message)
      dispatch(authRequestFailed(errorMessage))
    } else {
      dispatch(authRequestFailed(error.message))
    }
  }
}

export const logOut = () => (dispatch) => {
  localStorageService.removeAuthData()
  dispatch(userLoggedOut())
  history.push('/')
}

export const getIsLoggedIn = () => (state) => state.users.isLogggedIn
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getAuthErrors = () => (state) => state.users.error

export default usersReducer
