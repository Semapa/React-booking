import { createSlice } from '@reduxjs/toolkit'
import authService from '../services/auth.service'
import userService from '../services/user.service'
import localStorageService from '../services/localStorage.service'
import generateAuthError from '../utils/generateAuthError'
import history from '../utils/history'

const initialState = localStorageService.getAccessToken()
  ? {
      entities: null,
      isLoading: true,
      error: null,
      auth: { userId: localStorageService.getUserId() },
      isLogggedIn: true,
      dataLoaded: false
    }
  : {
      entities: null,
      isLoading: false,
      error: null,
      auth: null,
      isLogggedIn: false,
      dataLoaded: false
    }

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    usersRequested: (state) => {
      state.isLoading = true
    },
    usersReceved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    usersRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    },
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
const {
  authRequested,
  authRequestSuccess,
  authRequestFailed,
  userLoggedOut,
  usersRequested,
  usersReceved,
  usersRequestFailed
} = actions

export const login =
  ({ payload, redirect }) =>
  async (dispatch) => {
    console.log('login payload', payload)
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

export const loadUsersList = () => async (dispatch, getState) => {
  dispatch(usersRequested())
  try {
    const data = await userService.get()
    dispatch(usersReceved(data))
  } catch (error) {
    dispatch(usersRequestFailed(error.message))
  }
}

export const getCurrentUserData = () => (state) => {
  return state.users.entities
    ? state.users.entities.find((u) => u._id === state.users.auth.userId)
    : null
}

export const getUserById = (userId) => (state) => {
  if (state.users.entities) {
    return state.users.entities.find((u) => u._id === userId)
  }
}

export const getIsLoggedIn = () => (state) => state.users.isLogggedIn
export const getDataStatus = () => (state) => state.users.dataLoaded
export const getUsersLoadingStatus = () => (state) => state.users.isLoading
export const getCurrentUserId = () => (state) => state.users.auth.userId
export const getAuthErrors = () => (state) => state.users.error

export default usersReducer
