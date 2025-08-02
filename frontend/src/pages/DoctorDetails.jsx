// src/pages/DoctorDetails.jsx
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DoctorDetails() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${id}`)
      .then(res => res.json())
      .then(data => setDoctor(data));
  }, [id]);

  if (!doctor) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
      <p className="text-lg">{doctor.specialty}</p>
      <p>{doctor.experience} years of experience</p>
      <p className="mt-2 font-semibold">Weekly Availability:</p>
      <ul className="list-disc ml-5">
        {Object.entries(doctor.weeklyAvailability).map(([day, times]) => (
          <li key={day}>
            <strong>{day}:</strong> {times.length ? times.join(', ') : 'Not Available'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DoctorDetails;
