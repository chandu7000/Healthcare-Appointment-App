import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AppointmentsPage = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/doctors')
      .then(res => setDoctors(res.data));

    axios.get('http://localhost:5000/api/appointments')
      .then(res => setAppointments(res.data));
  }, []);

  const handleCancel = async (id) => {
    await axios.delete(`http://localhost:5000/api/appointments/${id}`);
    setAppointments(prev => prev.filter(app => app.id !== id));
  };

  const getDoctorName = (id) => {
    const doc = doctors.find(d => d.id === id);
    return doc ? doc.name : 'Unknown';
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found.</p>
      ) : (
        <ul className="space-y-4">
          {appointments.map(app => (
            <li key={app.id} className="p-4 bg-white shadow rounded flex justify-between items-center">
              <div>
                <p><strong>{app.patientName}</strong> with Dr. <strong>{getDoctorName(app.doctorId)}</strong></p>
                <p>{app.dateTime}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleCancel(app.id)} className="text-red-500">Cancel</button>
                {/* Future: Add reschedule modal/button here */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AppointmentsPage;
