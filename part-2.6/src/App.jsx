import { useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  
  const filteredPersons = persons.filter(person => person.name.includes(search))

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