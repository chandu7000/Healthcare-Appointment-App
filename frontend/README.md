# 🩺 NirogGyan Frontend Healthcare Appointment App

A responsive web application built with **React.js** that allows users to view doctor profiles and book appointments easily. It showcases clean UI, proper routing, data handling with mock backend (Node.js/Express), and form submission with validation.

---

## 📌 Features

- 🏠 **Home Page**
  - Lists doctors with profile image, name, specialization, and availability status.
  - Includes a search bar to filter doctors by name or specialization.

- 👨‍⚕️ **Doctor Profile Page**
  - Detailed doctor information with availability schedule.
  - Prominent **Book Appointment** button.

- 📅 **Appointment Booking**
  - Form collects Patient Name, Email, and Date/Time.
  - Confirmation message after successful booking.

- 📃 **View All Appointments**
  - Displays all booked appointments from mock backend.

---

## 🛠️ Tech Stack

| Category         | Tools/Frameworks                          |
|------------------|-------------------------------------------|
| Frontend         | React.js, JavaScript, Tailwind CSS        |
| Backend (Mock)   | Node.js, Express.js                       |
| Routing          | React Router DOM                          |
| State Management | React useState & useEffect (no Redux)     |
| Image Handling   | Local image imports                       |
| Styling          | Tailwind CSS                              |

---

## 🚀 How to Run the Project

### 🖥️ Frontend

```bash
cd frontend
npm install
npm run dev

### 🖥️ Backend

```bash
cd backend
npm install
node server.js


📁 Folder Structure

project/
├── backend/
│   ├── data/doctors.json
│   ├── data/appointments.json
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/images/
│   │   └── App.jsx
└── README.md

🔗 GitHub Repository

https://github.com/chandu7000/Healthcare-Appointment-App.git

