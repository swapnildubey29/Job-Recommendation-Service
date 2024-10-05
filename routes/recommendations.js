const express = require('express');
const { recommendJobs, createUserProfile } = require('../controllers/recommendationController');
const router = express.Router();

//Route to create user profile
router.post('/profile', createUserProfile);

// Route to get job recommendations
router.get('/recommendations/:userId', recommendJobs);

module.exports = router;
