import optionsReducer from './options'

const { combineReducers, configureStore } = require('@reduxjs/toolkit')

const rootReducer = combineReducers({ options: optionsReducer })

export function createStore() {
  return configureStore({
    reducer: rootReducer
  })
}
