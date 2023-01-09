
const express = require('express')

const app = express()

const port = 3002

let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
  ]

app.get('/', (req, res) => {
  res.send('<h1>Hello world!</h1')
})

app.get('/api/notes', (req, res) => {
  res.json(notes) // 自动转换 response的content-type
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})



