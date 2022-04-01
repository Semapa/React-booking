import httpService from './http.service'

const roomsEndpoint = 'rooms/'

const roomsService = {
  get: async () => {
    const { data } = await httpService.get(roomsEndpoint)
    return data
  },
  create: async (payload) => {
    const { data } = await httpService.post(roomsEndpoint, payload)
    return data
  }
}

export default roomsService
