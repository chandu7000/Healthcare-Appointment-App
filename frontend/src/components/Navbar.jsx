import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const getLinkClass = (path) =>
    isActive(path)
      ? 'text-blue-600 font-bold underline'
      : 'text-gray-800 font-bold hover:text-blue-500';

  return (
    <nav className="flex gap-6 p-4 bg-gray-100 border-b border-gray-300 justify-center">
      <Link to="/" className={getLinkClass('/')}>
        Home
      </Link>
      <Link to="/appointments" className={getLinkClass('/appointments')}>
        Appointments
      </Link>
    </nav>
  );
};

export default Navbar;
