import { useState } from 'react'
import  './index.css'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import usePersons from './hooks/usePersons'
import Notification from './components/Notification'

const App = () => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const {persons, message, handleAdd, handleDelete} = usePersons()
  const filteredPersons = search.length > 0 ? persons.filter(person => person.name.includes(search)) : persons 

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setSearch(event.target.value)
  }

  const onHandleAdd = (event) => {
    event.preventDefault()
    handleAdd(newName, newNumber)
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      {message !== 'None' ? <Notification message={message}/> : <></>}
      <Filter handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm handleAdd={onHandleAdd} handleName={handleName} handleNumber={handleNumber} name={newName} number={newNumber}/>
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}></Persons>
    </div>
  )
}

export default App