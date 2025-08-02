import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const API_BASE = import.meta.env.VITE_API_BASE_URL;

function BookPage() {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    time: '',
    reason: ''
  });

  useEffect(() => {
    fetch(`${API_BASE}/api/doctors`)
      .then(res => res.json())
      .then(data => {
        const selected = data.find(d => d.id === doctorId);
        setDoctor(selected);
      });
  }, [doctorId]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const appointmentData = {
      ...formData,
      doctorId,
      doctorName: doctor.name,
      specialty: doctor.specialty
    };

    const res = await fetch(`${API_BASE}/api/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    });

    if (res.ok) {
      alert('Appointment booked successfully!');
      navigate('/appointments');
    } else {
      alert('Error booking appointment');
    }
  };

  if (!doctor) return <p className="p-4">Loading doctor info...</p>;

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Book Appointment with Dr. {doctor.name}</h2>
      <p className="mb-2 text-gray-600">{doctor.specialty}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="patientName"
          placeholder="Your Name"
          required
          value={formData.patientName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="date"
          name="date"
          required
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="time"
          name="time"
          required
          value={formData.time}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <textarea
          name="reason"
          placeholder="Reason for visit"
          required
          value={formData.reason}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
}

export default BookPage;
