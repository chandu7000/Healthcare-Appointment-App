const doctors = require('../data/doctors.json')

// GET all doctors
const getDoctors = (req, res) => {
  res.status(200).json(doctors)
}

module.exports = {
  getDoctors
}
