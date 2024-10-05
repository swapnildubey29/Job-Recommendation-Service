const mongoose = require('mongoose');

const jobPostingSchema = new mongoose.Schema({
    job_id: Number,
    job_title: { type: String, required: true },
    company: { type: String, required: true },
    required_skills: { type: [String], required: true },  // Array of strings
    location: { type: String, required: true },
    job_type: { type: String, required: true },
    experience_level: { type: String, required: true },
    date_posted: { type: Date, default: Date.now }
});

const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

module.exports = JobPosting;