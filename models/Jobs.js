const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    skills: [String],
    experience_level: String,
    preference:{
        desired_roles: [String], // "Junior", "Intermediate", "Senior"
        locations: [String],
        job_type: String         // "Full-Time", "Part-Time", etc.
    }
})

const JobPostingSchema = new mongoose.Schema({
    job_id: Number,
    job_title: String,
    company: String,
    required_skills: [String],
    location: String,
    job_type: String,
    experience_level: String
})

const User = mongoose.model('User',UserSchema)
const JobPosting = mongoose.model('JobPosting',JobPostingSchema)