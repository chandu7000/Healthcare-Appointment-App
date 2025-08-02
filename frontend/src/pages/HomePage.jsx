import React, { useEffect, useState } from 'react'
import DoctorCard from '../components/DoctorCard'

function HomePage() {
  const [doctors, setDoctors] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/doctors')
      .then(response => response.json())
      .then(data => setDoctors(data))
  }, [])

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Available Doctors</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {doctors.map(doctor => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
