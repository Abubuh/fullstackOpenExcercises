import { useState } from 'react'

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
      <p>Filter shown with a </p> <input type="text" onChange={handleFilter}/>
      <h2>Add a new</h2>
      <form>
        <div onChange={handleName}>
          name: <input />
        </div>
        <div onChange={handleNumber}>
          number: <input />
        </div>
        <div>
          <button onClick={handleAdd} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {

        filteredPersons.map((name, index) => {
          return (
            <>
              <p key={index}>{name.name} - {name.number}</p>
            </>
            )
        })
      }
    </div>
  )
}

export default App