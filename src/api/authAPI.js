import axios from 'axios'

const authApi = axios.create({
  baseURL: process.env.VUE_APP_G_AUTH_URL,
  params: {
    key: process.env.VUE_APP_G_API_KEY
  }
})

export default authApi