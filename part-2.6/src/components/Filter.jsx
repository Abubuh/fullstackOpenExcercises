import React from 'react'

const Filter = ({handleFilter}) => {
  return (
  <>
    <p>Filter shown with a </p> <input type="text" onChange={handleFilter}/>
  </>
  )
}

export default Filter