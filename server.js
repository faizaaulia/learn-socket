import express from 'express'
import { Server } from 'socket.io'
const app = express()
const port = 4000

const server = app.listen(`${port}`, function () {
  console.log(`Server started on port ${port}`)
})

const io = new Server(server, {
  cors: { origin: 'http://localhost:5173' }
})

function getRandomValue() {
  return Math.floor(Math.random() * (50 - 5 + 1)) + 5
}

io.on('connection', (socket) => {
  setInterval(() => {
    socket.broadcast.emit('newdata', getRandomValue())
  }, 2000)
})
