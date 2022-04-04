import { createSlice } from '@reduxjs/toolkit'
import optionsService from '../services/options.service'

const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    optionsRequested: (state) => {
      state.isLoading = true
    },
    optionsReceved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    optionsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: optionsReducer, actions } = optionsSlice
const { optionsRequested, optionsReceved, optionsRequestFailed } = actions

export const loadOptionsList = () => async (dispatch) => {
  dispatch(optionsRequested())
  try {
    const data = await optionsService.get()
    dispatch(optionsReceved(data))
  } catch (error) {
    dispatch(optionsRequestFailed(error.message))
  }
}

export const getOptionsList = () => (state) => state.options.entities

export default optionsReducer
