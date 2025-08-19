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

export default mongoose.models.Employee ||
  mongoose.model("Employee", employeeSchema);
