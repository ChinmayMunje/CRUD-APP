const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MyDB'
const app = express()

mongoose.connect(url, {useNewUrlParser:true})

const con = mongoose.connection

con.on('open', function(){
    console.log("connected..");
})

app.use(express.json())

const alienRouter = require('./routers/aliens')
app.use('/aliens',alienRouter)

app.listen(9000, function(){
    console.log('Server Started')
})