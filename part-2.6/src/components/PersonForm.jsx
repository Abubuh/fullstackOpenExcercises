const PersonForm = ({handleName, handleNumber, handleAdd, name, number}) => {
  return (
    <form>
        <div >
          name: <input onChange={handleName} value={name}/>
        </div>
        <div >
          number: <input onChange={handleNumber} value={number}/>
        </div>
        <div>
          <button onClick={handleAdd} type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm