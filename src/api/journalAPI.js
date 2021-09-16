import axios from 'axios'

const journalApi = axios.create({
  baseURL: process.env.VUE_APP_DB_HOST
})

export default journalApi