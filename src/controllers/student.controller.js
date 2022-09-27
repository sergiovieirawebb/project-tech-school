const express = require('express');

const router = express.Router();
const studentService = require('../services/student.service');

router.get('/', async (_req, res) => {
  const students = await studentService.findAll();
  return res.status(200).json(students);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const { course } = req.query;
  const student = await studentService.findByPk(id, course);
  return res.status(200).json(student);
});

router.post('/', async (req, res) => {
  const newStudent = await studentService.create(req.body);
  return res.status(200).json(newStudent);
});

module.exports = router;
