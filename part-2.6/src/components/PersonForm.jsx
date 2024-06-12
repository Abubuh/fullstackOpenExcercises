import React from 'react'

const PersonForm = ({handleName, handleNumber, handleAdd}) => {
  return (
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
  )
}

export default PersonForm