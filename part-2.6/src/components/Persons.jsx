const Persons = ({filteredPersons, handleDelete}) => {
 
  return (
    <>
      {
        filteredPersons.length > 0 ? 
        filteredPersons.map((person, index) => {
          return (
              <div key={index}>
                <p>{person.name} - {person.number} <button onClick={() => handleDelete(person.id)}>delete</button></p>
              </div>
            )
        }): "No persons found"
      }
    </>
  )
}

export default Persons