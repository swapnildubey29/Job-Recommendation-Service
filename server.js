const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())

//Connecting MongoDB
mongoose.connect('mongodb://localhost:27027/job_recommendation',{useNewUrlParser: true,useUnifiedTopology: true})

app.get('/', (req,res) =>{
    res.send('Welcome to the Job Recommendation API')
})

app.listen(8000, () =>{
    console.log('Server is running at port 8000')
})