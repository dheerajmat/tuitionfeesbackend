// server/controllers/studentController.js
const Student = require('../models/Student');

exports.addStudent = async (req, res) => {
  const { name, studentId, class: studentClass, contactInfo } = req.body;

  try {
    let student = new Student({ name, studentId, class: studentClass, contactInfo });
    await student.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateStudent = async (req, res) => {
  const { name, studentId, class: studentClass, contactInfo } = req.body;

  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    student.name = name || student.name;
    student.studentId = studentId || student.studentId;
    student.class = studentClass || student.class;
    student.contactInfo = contactInfo || student.contactInfo;

    await student.save();
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.removeStudent = async (req, res) => {
  try {
    let student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: 'Student not found' });
    }

    await student.remove();
    res.json({ msg: 'Student removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
