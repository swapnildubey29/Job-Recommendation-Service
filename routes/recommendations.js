const express = require('express')
const { recommendJobs, createUserProfile, createJobPosting } = require('../controllers/recommendationController')
const router = express.Router()

//Route to create user profile
router.post('/profile', createUserProfile)

//Route to create Job
router.post('/jobposting', createJobPosting)

// Route to get job recommendations
router.get('/recommendations/:userId', recommendJobs)

module.exports = router;