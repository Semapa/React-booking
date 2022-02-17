import axios from 'axios'
import configFile from '../config.json'

const http = axios.create({
  baseUrl: configFile.apiEndpoint
})

const httpService = {
  get: http.get,
  post: http.post
}

export default httpService
