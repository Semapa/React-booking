import { combineReducers, configureStore } from '@reduxjs/toolkit'
import optionsReducer from './options'
import usersReducer from './users'
import roomsReducer from './rooms'

const rootReducer = combineReducers({
  options: optionsReducer,
  users: usersReducer,
  rooms: roomsReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
