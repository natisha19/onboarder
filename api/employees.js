import { connectToDatabase } from "./db.js";
import Employee from "./models/Employee.js";

export default async function handler(req, res) {
  await connectToDatabase();

  // GET /api/employees → get all employees
  if (req.method === "GET") {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  }

  // POST /api/employees → add a new employee
  else if (req.method === "POST") {
    try {
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  }

  // Handle other HTTP methods
  else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
