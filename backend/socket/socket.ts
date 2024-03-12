import express from 'express'
import { createServer } from 'http'
import { Server, Socket } from 'socket.io'

const app = express()
const server = createServer(app)
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST'],
    },
})

const userSockerMap: { [key: string]: string } = {}

const getReceiverSocketId = (receiverId: string): string => {
    return userSockerMap[receiverId]
}

io.on('connection', (socket) => {
    console.log('a user connected: ', socket.id)

    const { senderId } = socket.handshake.query as { senderId: string }
    console.log('userSockerMap', userSockerMap)

    if (senderId) {
        userSockerMap[senderId] = socket.id
    }

    io.emit('getOnlineUsers', Object.keys(userSockerMap))

    socket.on('disconnect', () => {
        delete userSockerMap[senderId]
        io.emit('getOnlineUsers', Object.keys(userSockerMap))
        console.log('user disconnected: ', socket.id)
    })
})

export { app, io, server, getReceiverSocketId }
