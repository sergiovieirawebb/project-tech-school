const express = require('express');

const router = express.Router();

const { authValidationMiddleware, authenticateMiddleware } = require('../middlewares/auth.middleware');

const courseController = require('../controllers/course.controller');
const studentController = require('../controllers/student.controller');
const authController = require('../controllers/auth.controller');

router.use('/auth', authValidationMiddleware, authController);
router.use('/course', authenticateMiddleware, courseController);
router.use('/student', studentController);

module.exports = router;
