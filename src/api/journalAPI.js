import axios from 'axios'

const journalApi = axios.create({
  baseURL: process.env.VUE_APP_DB_HOST
})

journalApi.interceptors.request.use( (config) => {
  config.params = {
    auth: localStorage.getItem('idToken')
  }

  return config
})

export default journalApi