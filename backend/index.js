const express = require('express')
const bollywoodRouter = require('./routes/bollywood')
const app = express()
const cors = require('cors')
app.use(cors())
app.use('/',function(req,res){
    res.send("app is running")
})
app.use('/api',bollywoodRouter)

app.listen(3001,()=>{
    console.log('listening...')
})