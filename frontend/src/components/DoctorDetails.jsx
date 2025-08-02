import { Link } from 'react-router-dom';
import WeeklySchedule from './WeeklySchedule';

const DoctorDetails = ({ doctor }) => {
  if (!doctor) {
    return (
      <div className="text-center py-6">
        <p className="text-gray-500">Loading doctor details...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{doctor.name}</h2>
      <p className="text-gray-600 mb-1"><strong>Specialty:</strong> {doctor.specialty}</p>
      <p className="text-gray-600 mb-1"><strong>Experience:</strong> {doctor.experience} years</p>
      <p className="text-gray-600 mb-4"><strong>Location:</strong> {doctor.location}</p>

      {/* ✅ Weekly Schedule display */}
      <WeeklySchedule availability={doctor.weeklyAvailability} />

      <Link to={`/book/${doctor.id}`}>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full mt-4">
          Book Appointment
        </button>
      </Link>
    </div>
  );
};

export default DoctorDetails;
