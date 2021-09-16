import clouDinaryAPI from "../api/clouDinaryAPI"

const uploadImage = async ( file ) => {
  
  if ( !file ) return

  try {
    
    const formData = new FormData()
    formData.append('upload_preset', 'vue-curso')
    formData.append('file', file)

    const {data} = await clouDinaryAPI.post('/image/upload', formData)

    return data.secure_url

  } catch (error) {

    console.error('Error al cargar el archivo')
    console.log(error)

    return null
  }
}

export default uploadImage