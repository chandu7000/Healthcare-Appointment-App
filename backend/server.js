const express = require('express');
const cors = require('cors');
const fs = require('fs');
const dotenv = require('dotenv');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Paths
const doctorsFilePath = path.join(__dirname, 'data', 'doctors.json');
const appointmentsFilePath = path.join(__dirname, 'data', 'appointments.json');

// Load doctor data
const doctors = fs.existsSync(doctorsFilePath)
  ? JSON.parse(fs.readFileSync(doctorsFilePath))
  : [];

// Helper: Read appointments
function readAppointments() {
  if (!fs.existsSync(appointmentsFilePath)) {
    fs.writeFileSync(appointmentsFilePath, JSON.stringify([]));
  }
  return JSON.parse(fs.readFileSync(appointmentsFilePath));
}

// Helper: Save appointments
function saveAppointments(data) {
  fs.writeFileSync(appointmentsFilePath, JSON.stringify(data, null, 2));
}

// GET all doctors
app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

// GET all appointments
app.get('/api/appointments', (req, res) => {
  try {
    const appointments = readAppointments();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: 'Failed to read appointments.' });
  }
});

// POST new appointment
app.post('/api/appointments', (req, res) => {
  const { doctorId, patientName, date, time, reason } = req.body;

  if (!doctorId || !patientName || !date || !time || !reason) {
    return res.status(400).json({ error: 'All appointment fields are required.' });
  }

  const newAppointment = {
    id: uuidv4(),
    doctorId,
    patientName,
    date,
    time,
    reason,
    createdAt: new Date().toISOString()
  };

  try {
    const appointments = readAppointments();
    appointments.push(newAppointment);
    saveAppointments(appointments);
    res.status(201).json({ message: 'Appointment saved successfully', appointment: newAppointment });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save appointment.' });
  }
});

// DELETE appointment by ID
app.delete('/api/appointments/:id', (req, res) => {
  const { id } = req.params;

  try {
    const appointments = readAppointments();
    const filtered = appointments.filter(app => app.id !== id);

    if (appointments.length === filtered.length) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }

    saveAppointments(filtered);
    res.json({ message: 'Appointment canceled successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete appointment.' });
  }
});

// PUT update/reschedule appointment
app.put('/api/appointments/:id', (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const appointments = readAppointments();
    const index = appointments.findIndex(app => app.id === id);

    if (index === -1) {
      return res.status(404).json({ error: 'Appointment not found.' });
    }

    appointments[index] = { ...appointments[index], ...updatedData };
    saveAppointments(appointments);
    res.json({ message: 'Appointment updated successfully.', updated: appointments[index] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update appointment.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(` Server running at: http://localhost:${PORT}`);
});
