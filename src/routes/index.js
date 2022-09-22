const express = require('express');

const router = express.Router();
const courseController = require('../controllers/course.controller');

router.use('/courses', courseController);

module.exports = router;
