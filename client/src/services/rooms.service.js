import httpService from './http.service'

const roomsEndpoint = 'rooms/'

const roomsService = {
  create: async (payload) => {
    const { data } = await httpService.post(roomsEndpoint, payload)
    return data
  }
}

export default roomsService
