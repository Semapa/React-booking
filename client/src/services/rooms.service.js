import httpServise from './http.service'

const roomsEndpoint = 'rooms/'

const roomsService = {
  create: async (payload) => {
    const { data } = await httpServise.post(roomsEndpoint, payload)
    return data
  }
}

export default roomsService
