import { useEffect, useState } from 'react'
import personService from "../services/persons"

const usePersons = () => {
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('None')
  const fetchPersons = () => {
    personService.getAll().then(res => setPersons(res.data))
  }

  const handleAdd = (newName, newNumber) => {
    if(newName.length === 0 && newNumber.length === 0)return alert("Fill all the data")
    let newPersonData = {name: newName, number: newNumber}
    const person = persons.find(person => person.name === newName) 
    if (person) {
      if(window.confirm('This person is already on the phonebook, do you wanna change the number?')){
        personService.updatePerson(person.id, newPersonData)
        setMessage(`Updated ${newName}`)
        fetchPersons()
      }
    }
    else{
      personService.create(newPersonData)
      .then(() => {
        setMessage(`Added ${newName}`)
        fetchPersons()
      })
    }
  }

  const handleDelete = (id, name) => {
    if(window.confirm(`Do you want to delete ${name}?`)){
      personService.deletePerson(id)
      .then(() => {
        fetchPersons()
        setMessage(`Deleted ${name}`)
      })
    }
  }

  useEffect(() => {
    fetchPersons()
  },[])

  return {
    persons,
    message,
    refetch: fetchPersons,
    handleDelete,
    handleAdd
  }
}

export default usePersons