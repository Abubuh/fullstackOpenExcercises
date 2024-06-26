const express = require('express')

const app = express()
app.use(express.json())


let persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if(person){
    res.json(person)
  }else{
    res.status(404).end()
  }
})

const generatedId = () => {
  const id = Math.floor(Math.random() * 100000)
  return id
}
app.post('/api/persons', (req, res) => {
  const person = {
    name: req.body.name,
    number: req.body.number,
    id: generatedId()
  }
  if(!person.name && !person.number){
    return console.log('Requires name and number')
  }
  else if(!person.name){
    return console.log('Name is empty')
  }else if(!person.number){
    return console.log('Number is empty')
  }
  persons = persons.concat(person)
  res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)
  res.status(204).end()
})

app.get('/info', (req, res) => {
  res.send(
    `<p>Phonebook has info for ${persons.length} people</p><p>${new Date()}</p>`
  )
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server is running in port ${PORT}` )
})  