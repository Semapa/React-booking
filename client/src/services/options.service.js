import axios from 'axios'

// import httpService from './http.service'

const optionsEndpoint = 'options/'

const optionsService = {
  get: async () => {
    // const { data } = await httpService.get(optionsEndpoint)
    const { data } = await axios
      .get('http://localhost:8080/api/' + optionsEndpoint)
      .then((res) => {
        console.log('res', res)
        return res
      })
      .catch((err) => {
        console.log(err)
      })
    console.log('data', data)
    return data
  }
}

export default optionsService
