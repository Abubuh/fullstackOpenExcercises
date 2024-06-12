import React from 'react'

const Persons = ({filteredPersons}) => {
  return (
    <>{
        filteredPersons.length > 0 ? 
        filteredPersons.map((name, index) => {
          return (
              <p key={index}>{name.name} - {name.number}</p>
            )
        }): "No persons found"
      }
      </>
  )
}

export default Persons