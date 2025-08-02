import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DoctorCard from '../components/DoctorCard';

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function HomePage() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/api/doctors`)
      .then(response => setDoctors(response.data))
      .catch(err => console.error('Error fetching doctors:', err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Doctors</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
