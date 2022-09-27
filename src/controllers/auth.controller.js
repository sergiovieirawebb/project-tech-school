const express = require('express');

const router = express.Router();
const authService = require('../services/auth.service');

router.post('/', async (req, res) => {
  const token = await authService.authenticate(req.body);
  return res.status(201).json(token);
});

module.exports = router;
