const express = require('express')
const mongoose = require('mongoose')
const app = express()
app.use(express.json())
const User = require('./models/Jobs')

//Connecting MongoDB
mongoose.connect('mongodb://localhost:27027/job_recommendation',{useNewUrlParser: true,useUnifiedTopology: true})

app.get('/', (req,res) =>{
    res.send('Welcome to the Job Recommendation API')
})

//Route for creating User Profile
app.post('/profile', async(req,res) =>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch(error){
        res.status(400).send(error.message)
    }
})

//Route for Job Recommendation
app.get('/recommendation/:userId',async(req,res) =>{
    try{
      const user = await User.findbyId(req.params.userId)
      if(!user){
        return res.status(404).send('User not found')
      }
        const recommendation = await recommendJobs(user)
        res.json(recommendation)
    }catch(error){
       res.status(500).json({error: error.message})
    }
})

app.listen(8000, () =>{
    console.log('Server is running at port 8000')
})