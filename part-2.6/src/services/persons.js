import axios from 'axios'
const baseUrl = 'http://localhost:3002/persons'

const getAll = () => {
    return axios.get(baseUrl)
}

const create = newObject => {
    return axios.post(baseUrl, newObject)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const updatePerson= (id, newData) => {
    return axios
    .put(`${baseUrl}/${id}`, newData)
    .then(res => res.data)
    .then(data => {return data})
}

export default { 
  getAll: getAll, 
  create: create,
  deletePerson: deletePerson,
  updatePerson: updatePerson
}