const User = require('../models/User')
const JobPosting = require('../models/JobPosting')

//Creating user profile
const createUserProfile = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).send(user)
    } catch (error) {
        res.status(400).send(error.message)
    }
}

//Job Posting
const createJobPosting = async (req,res) =>{
    try{
        const JobPosting = new JobPosting(req.body)
        await JobPosting.save()
        res.status(201).send(JobPosting)
    }catch(error){
        res.status(400).send(error.message)
    }
}

//Recommendating Job
const recommendJobs = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)
        if (!user) {
            return res.status(404).send('User not found')
        }

        const jobs = await JobPosting.find({
            location: { $in: user.preferences.locations },
            job_type: user.preferences.job_type,
            experience_level: user.experience_level
        })

        const recommendedJobs = jobs.filter(job =>
            job.required_skills.some(skill => user.skills.includes(skill))
        )

        res.json(recommendedJobs)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = { recommendJobs, createUserProfile, createJobPosting }
