import optionsReducer from './options'
import usersReducer from './users'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({
  options: optionsReducer,
  users: usersReducer
})

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
