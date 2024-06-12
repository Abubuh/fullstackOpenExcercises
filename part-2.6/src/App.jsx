import { useState } from 'react'

const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: '7849-44521-12364'
    }
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }
  const handleNumber = (event) => {
    setNewNumber(event.target.value)
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
        persons.map((name, index) => {
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