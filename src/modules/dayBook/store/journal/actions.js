import journalApi from "@/api/journalAPI"

// export const myAction = async({ commit }) => {

// }

export const getEntries = async({ commit }) => {
  const { data } = await journalApi.get('/entries.json')

  if ( !data ) {
    commit('setEntries', [])
    return
  }

  const entries = []

  for ( let id of Object.keys(data) ) {
    entries.push({
      id,
      ...data[id]
    })
  }
  
  commit('setEntries', entries)
}

export const createEntries = async({ commit }, entry ) => {
  
  const { date, picture, text } = entry
  const dataTosaved = { date, picture, text  }

  const {data} = await journalApi.post(`/entries.json`, dataTosaved)

  dataTosaved.id = data.name
  
  commit('addEntries', dataTosaved)

  return dataTosaved.id
}

export const updateEntries = async({ commit }, entry) => {
  
  const {date, picture, text} = entry
  const payload = {date, picture, text}

  await journalApi.put(`/entries/${entry.id}.json`, payload)

  commit('updateEntries', entry)
}

export const deleteEntry = async({ commit }, id) => {
  
  await journalApi.delete(`/entries/${id}.json`)

  commit('deleteEntry', id)
}