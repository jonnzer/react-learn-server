const Note = require('../models/note')

const initialNotes = [
  {
    content: 'HTML is easy',
    date: new Date(),
    important: false
  },
  {
    content: 'Browser can execute only Javascript',
    date: new Date(),
    important: true
  }
]

const nonExistingId = async () => { // 用来创建一个不属于数据库中任何笔记对象的数据库对象ID
  const note = new Note({ content: 'willremovethissoon', date: new Date() })
  await note.save()
  await note.remove()
  return note._id.toString()
}

const notesInDb = async () => { // 检查存储在数据库中的笔记。包含初始数据库状态的initialNotes数组也在该模块中。
  const notes = await Note.find({})
  return notes.map(note => note.toJSON())
}

module.exports = {
  initialNotes, nonExistingId, notesInDb
}