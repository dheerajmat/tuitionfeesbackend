// server/controllers/feeController.js
const Fee = require('../models/Fee');

exports.addFee = async (req, res) => {
  const { studentId, month, year, amount } = req.body;

  try {
    let fee = new Fee({ studentId, month, year, amount });
    await fee.save();
    res.json(fee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateFeeStatus = async (req, res) => {
  try {
    let fee = await Fee.findById(req.params.id);
    if (!fee) {
      return res.status(404).json({ msg: 'Fee not found' });
    }

    fee.paid = !fee.paid;
    await fee.save();
    res.json(fee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getFeesByStudent = async (req, res) => {
  try {
    let fees = await Fee.find({ studentId: req.params.studentId });
    res.json(fees);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
