
const express = require('express')

const app = express()
app.use(express.json()) // 如果没有 json-parser，body 属性将是未定义的。json-parser 的功能是将请求的 JSON 数据转化为 JavaScript 对象，然后在调用路由处理程序之前将其附加到 request 对象的 body 属性。
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

// 用冒号语法为 Express 中的路由定义 参数
app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  const note = notes.find(note => note.id === id)
  // 404 handle not found
  if (note) {
    res.json(note)
  } else {
    res.status(404).end()
  }
})

// delete resource
app.delete('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id)
  notes = notes.filter(note => note.id !== id)
  res.status(204).end() // 204 请求成功 无返回内容
})

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

// add new note
app.post('/api/notes', (req, res) => {
  const body = req.body
  if (!body.content) {
    return res.status(400).json({
      error: 'content missing'
    })
  }
  const note = {
    content: body.content,
    important: body.important || false, // default value setting
    date: new Date(), // use server time
    id: generateId()
  }
  notes = notes.concat(note)
  res.json(note)
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})



