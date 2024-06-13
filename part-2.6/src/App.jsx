import { useEffect, useState } from 'react'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
 
  useEffect(() => {
      personService.getAll().then(res => setPersons(res.data))
  },[])

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

  const handleDelete = (id) => {
    if(window.confirm('Do you really want to delete it?')){
      personService.deletePerson(id)
      .then(res => {
        let newPersons = persons.filter((person) => person.id !== res.data.id)
        setPersons(newPersons)
      })
    }
  }
  
  const handleAdd = (event) => {
    event.preventDefault()
    if(newName.length === 0 && newNumber.length === 0)return alert("Fill all the data")
    if (persons.some(e => e.name === newName)) {
      alert(`${newName} is already on the phonebook!`)
      return
    }
    let personObject = {name: newName, number: newNumber}
    personService.create(personObject)
    .then(res => {
      setPersons([...persons, res.data])
      setNewName('')
      setNewNumber('')
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>Add a new</h2>
      <PersonForm handleAdd={handleAdd} handleName={handleName} handleNumber={handleNumber} name={newName} number={newNumber}/>
      <h3>Numbers</h3>
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete}></Persons>
    </div>
  )
}

export default App