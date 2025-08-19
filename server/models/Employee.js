// models/Employee.js
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  email: String,
  position: String,
  department: String,
  startDate: Date,
  isActive: Boolean,
  owner: String,
  tasksdone : Number
});

module.exports = mongoose.model('Employee', employeeSchema);
