import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
  return (
    <div className="border p-4 rounded-lg shadow hover:shadow-lg transition">
      <img
        src={doctor.image.startsWith('http') ? doctor.image : `/assets/${doctor.image}`}
        alt={doctor.name}
        className="w-full h-48 object-cover rounded mb-3"
      />
      <h2 className="text-xl font-semibold">Dr. {doctor.name}</h2>
      <p className="text-gray-600">{doctor.specialization}</p>
      <p className="text-sm text-gray-500">Experience: {doctor.experience} years</p>

      {doctor.weeklyAvailability && (
        <div className="mt-2">
          <p className="font-medium">Available:</p>
          <ul className="text-sm text-gray-700 list-disc ml-5">
            {Object.entries(doctor.weeklyAvailability).map(
              ([day, slots]) =>
                slots.length > 0 && (
                  <li key={day}>
                    {day}: {slots.join(', ')}
                  </li>
                )
            )}
          </ul>
        </div>
      )}

      {/* Add this block for the Book Appointment button */}
      <Link
        to={`/book/${doctor.id}`}
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Book Appointment
      </Link>
    </div>
  );
}

export default DoctorCard;
