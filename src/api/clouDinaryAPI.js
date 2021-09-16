import axios from 'axios'

const baseURL = `${process.env.VUE_APP_CLOUDINARY_URL}/${process.env.VUE_APP_CLOUDINARY_NAME}`

const clouDinaryAPI = axios.create({ baseURL })

export default clouDinaryAPI