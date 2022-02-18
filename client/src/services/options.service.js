import httpService from './http.service'

const optionsEndpoint = 'options/'

const optionsService = {
  get: async () => {
    const { data } = await httpService.get(optionsEndpoint)
    return data
  }
}

export default optionsService
