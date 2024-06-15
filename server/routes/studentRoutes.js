// server/routes/studentRoutes.js
const express = require('express');
const { addStudent, updateStudent, removeStudent } = require('../controllers/studentController');
const router = express.Router();

router.post('/', addStudent);
router.put('/:id', updateStudent);
router.delete('/:id', removeStudent);

module.exports = router;
