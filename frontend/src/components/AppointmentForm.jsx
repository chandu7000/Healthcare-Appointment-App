// src/components/AppointmentForm.jsx
import React, { useState } from 'react';

const AppointmentForm = ({ doctor, onSubmit }) => {
  const [patientName, setPatientName] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ patientName, appointmentDate, doctorId: doctor.id });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-xl max-w-xl mx-auto mt-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Book Appointment with {doctor.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-gray-700">Your Name</label>
          <input
            type="text"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label className="block mb-1 text-gray-700">Appointment Date</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
