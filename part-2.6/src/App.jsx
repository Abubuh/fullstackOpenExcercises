import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault()
    setPersons([...persons, {name: newName}])
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div onChange={handleName}>
          name: <input />
        </div>
        <div>
          <button onClick={handleAdd} type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {
        persons.map((name) => {
          console.log(name)
          return (
            <p key={name.id}>{name.name}</p>
            )
        })
      }
    </div>
  )
}

export default App