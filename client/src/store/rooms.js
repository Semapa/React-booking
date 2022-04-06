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
    },
    roomsUpdated: (state, action) => {
      state.entities.push(action.payload)
      state.isLoading = false
    },
    roomRemoved: (state, action) => {
      state.entities = state.entities.filter((e) => e._id !== action.payload)
      state.isLoading = false
    }
  }
})

const { reducer: roomsReducer, actions } = roomsSlice
const {
  roomsRequested,
  roomsReceved,
  roomsRequestFailed,
  roomsUpdated,
  roomRemoved
} = actions

export const createRoom = (payload) => async (dispatch) => {
  // console.log('rooms createRoom payload', payload)
  try {
    const content = await roomsService.create({ ...payload })
    dispatch(roomsRequested())
    // console.log('rooms createRoom content', content)
    if (content) {
      dispatch(roomsUpdated(content))
    }
  } catch (error) {
    dispatch(roomsRequestFailed(error.message))
  }
}

export const removeRoom = (id) => async (dispatch) => {
  try {
    const { content } = await roomsService.remove(id)
    if (!content) {
      dispatch(roomsRequested)
      dispatch(roomRemoved(id))
    }
  } catch (error) {
    dispatch(roomsRequestFailed(error.message))
  }
}

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
