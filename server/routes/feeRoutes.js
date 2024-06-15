// server/routes/feeRoutes.js
const express = require('express');
const { addFee, updateFeeStatus, getFeesByStudent } = require('../controllers/feeController');
const router = express.Router();

router.post('/', addFee);
router.put('/:id', updateFeeStatus);
router.get('/:studentId', getFeesByStudent);

module.exports = router;
