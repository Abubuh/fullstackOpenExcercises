import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
 
  useEffect(() => {
    const fetchPersons = () => {
      axios.get('http://localhost:3002/persons').then(res => setPersons(res.data))
    }
    fetchPersons()
  },[])

  const filteredPersons = search.length > 0 ? persons.filter(person => person.name.includes(search)) : persons 
  console.log(filteredPersons)
  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setSearch(event.target.value)
  }
  
  const handleAdd = (event) => {
    event.preventDefault()
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already on the phonebook!`)
      return
    }
    setPersons([...persons, {name: newName, number: newNumber}])
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm handleAdd={handleAdd} handleName={handleName} handleNumber={handleNumber}/>
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons}></Persons>
    </div>
  )
}

export default App