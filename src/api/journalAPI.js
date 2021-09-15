import axios from 'axios'

const journalApi = axios.create({
  baseURL: 'https://vue-demo-316cb-default-rtdb.firebaseio.com'
})

export default journalApi