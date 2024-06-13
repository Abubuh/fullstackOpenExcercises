import React from 'react'

const PersonForm = ({handleName, handleNumber, handleAdd, name, number}) => {
  return (
    <form>
        <div onChange={handleName}>
          name: <input value={name}/>
        </div>
        <div onChange={handleNumber}>
          number: <input value={number}/>
        </div>
        <div>
          <button onClick={handleAdd} type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm