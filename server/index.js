const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoute')
const messageRoute = require('./routes/messagesRoute')

const app = express()

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use("/api/auth",userRoute)
app.use('/api/messages',messageRoute)

mongoose.connect(process.env.MONGO_URI)
.then(()=>{console.log("DB Connected")})
.catch((err)=>console.log(err))

app.listen(5000,()=>{
    console.log("Server listening on port 5000");
})