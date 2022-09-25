const express = require('express');

const router = express.Router();
const courseController = require('../controllers/course.controller');
const studentController = require('../controllers/student.controller');

router.use('/course', courseController);
router.use('/student', studentController);

module.exports = router;
