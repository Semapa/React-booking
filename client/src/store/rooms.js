import { createSlice } from '@reduxjs/toolkit'
import roomsService from '../services/rooms.service'

const roomsSlice = createSlice({
  name: 'rooms',
  initialState: {
    entities: null,
    isLoading: true,
    error: null
  },
  reducers: {
    roomsRequested: (state) => {
      state.isLoading = true
    },
    roomsReceved: (state, action) => {
      state.entities = action.payload
      state.isLoading = false
    },
    roomsRequestFailed: (state, action) => {
      state.error = action.payload
      state.isLoading = false
    }
  }
})

const { reducer: roomsReducer, actions } = roomsSlice
const { roomsRequested, roomsReceved, roomsRequestFailed } = actions

export const loadRoomsList = () => async (dispatch) => {
  dispatch(roomsRequested())
  try {
    const data = await roomsService.get()
    dispatch(roomsReceved(data))
  } catch (error) {
    dispatch(roomsRequestFailed(error.message))
  }
}

export const getRoomsList = () => (state) => state.rooms.entities

export default roomsReducer
