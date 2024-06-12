import React from 'react'

const Persons = ({filteredPersons}) => {
  return (
    <>{
        filteredPersons.map((name, index) => {
          return (
              <p key={index}>{name.name} - {name.number}</p>
            )
        })
      }
      </>
  )
}

export default Persons