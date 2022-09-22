const express = require('express');

const router = express.Router();
const courseService = require('../services/course.service');

router.get('/', async (_req, res) => {
  const courses = await courseService.findAll();
  return res.status(200).json(courses);
});

router.post('/', async (req, res) => {
  const newCourse = await courseService.create(req.body);
  return res.status(201).json(newCourse);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const updatedCourse = await courseService.update(req.body, id);

  if (updatedCourse) {
    return res.status(201).json({ message: `Curso ${id} atualizado com sucesso!` });
  }
  return res.status(404).json({ message: `Erro ao atualizar curso ${id}` });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const removedCourse = await courseService.destroy(id);

  if (removedCourse) {
    return res.status(201).json({ message: `Curso ${id} removido com sucesso!` });
  }
  return res.status(404).json({ message: `Erro ao remover curso ${id}` });
});

module.exports = router;
