import React, { useState } from 'react';
import { FaHome, FaUsers, FaFilm, FaChartPie, FaCog, FaStar, FaSignOutAlt, FaCamera} from 'react-icons/fa';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { signout } from '../../redux/slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { persistor } from '../../redux/persistor';
// import { NavLink } from 'react-router-dom';

const AdminSidebar: React.FC = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useAppDispatch();
  const handleSignout = async()=>{
    await dispatch(signout());
    await persistor.purge();
    navigate('/signin');
  }
  const links = [
    { name: 'Dashboard', path: '/admin', icon: <FaHome /> },
    { name: 'Users', path: '/admin/users', icon: <FaUsers /> },
    { name: 'Celebrities', path: '/admin/celebrities', icon: <FaStar /> },
    { name: 'Movies', path: '/admin/movies', icon: <FaFilm /> },
    { name: 'Genres', path: '/admin/genres', icon: <FaCamera/> },
    { name: 'Analytics', path: '/admin/analytics', icon: <FaChartPie /> },
    { name: 'Settings', path: '/admin/settings', icon: <FaCog /> },
  ];

  return (
    <div
      className={`fixed hidden md:flex flex-col justify-center top-0 left-0 h-screen z-30 bg-[rgb(44,44,44)] text-white shadow-lg transition-all duration-300 ${
        isHovered ? 'lg:w-64 w-20' : 'w-20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <nav className="mt-5 flex flex-col justify-center">
        <ul className='flex flex-col space-y-5 items-center'>
          {links.map((link) => (
            <li key={link.name} className="group hover:cursor-pointer w-full flex justify-center">
              <div
                onClick={()=>navigate(link.path)}
                className={`flex items-center gap-3 w-1/2 py-3 transition-colors duration-200`}
                
              >
              {/* <NavLink
                 to={link.path}
                 className={({ isActive }) =>
                   `flex items-center px-4 py-3 transition-colors duration-200 ${
                     isActive ? 'bg-indigo-500' : 'hover:bg-gray-800'
                   }`
                 }
              > */}
                <div className="text-2xl group-hover:text-[#5cfef0]">{link.icon}</div>
                {isHovered && (
                  <span className="ml-3 hidden lg:flex group-hover:text-[#5cfef0] font-medium transition-opacity duration-300">
                    {link.name}
                  </span>
                )}
                {/* </NavLink> */}
              </div>
            </li>
          ))}
          <li className="group hover:cursor-pointer w-full flex justify-center">
              <div
                onClick={handleSignout}
                className={`flex items-center gap-3 w-1/2 py-3 transition-colors duration-200`}
              >
                <div className="text-2xl"><FaSignOutAlt/></div>
                {isHovered &&(
                  <span className="ml-3 hidden lg:flex group-hover:text-[#5cfef0] font-medium transition-opacity duration-300">Sign out</span>
                )}
              </div>
            </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
