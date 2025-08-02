const WeeklySchedule = ({ availability }) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="font-semibold mb-2 text-gray-700">Weekly Availability</h3>
      <div className="grid grid-cols-2 gap-3 text-sm">
        {days.map((day) => (
          <div key={day}>
            <p className="text-blue-700 font-medium">{day}</p>
            {availability[day] && availability[day].length > 0 ? (
              <ul className="list-disc list-inside text-gray-600">
                {availability[day].map((slot, index) => (
                  <li key={index}>{slot}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-400">Not Available</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklySchedule;
