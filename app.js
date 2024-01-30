const express=require('express')
const path=require('path')
const app=express()
const port= process.env.port || 5000
const server = app.listen(port, ()=> console.log(`server on port ${port}`))

const io=require('socket.io')(server)
app.use(express.static(path.join(__dirname, 'public')))

io.on('connection', (socket) => {
    console.log('someone connected!');
    socket.on('message', (data) =>{              
        console.log(`message received ${data.message}`)
        socket.broadcast.emit('messagereceive',data)
    }) 
  });
