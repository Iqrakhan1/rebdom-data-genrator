const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const employeeSchema = require("./models/employee");
const app = express();


mongoose.connect("mongodb://localhost:27017/company");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("main page");
});

const rendom = (input) => {
  return Math.floor(Math.random() * input.length);
};

const employeeName = ["iqra", "muskan", "mahvish", "sara", "Ahira"];
const employeeLanguage = ["javascript", "java", "python", ".net", "c++"];
const employeeCity = ["Bhopal", "kolkata", "indore", "delhi", "hydrabad"];

app.get("/employee", async (req, res) => {
  try {
    await employeeSchema.deleteMany({});

    const employees = [];

    for (let i = 0; i < 10; i++) {
      // Create a new employee with random values
      const newEmployee = new employeeSchema({
        name: employeeName[rendom(employeeName)],
        language: employeeLanguage[rendom(employeeLanguage)],
        salary: Math.floor(Math.random() * 45000),
        city: employeeCity[rendom(employeeCity)], 
        isManager: Math.random() > 0.5,
      });

      await newEmployee.save(); 
      employees.push(newEmployee); 
    }

    res.json(employees); 
  } catch (error) {
    res.status(500).send("Error occurred while adding employees");
  }
});

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
