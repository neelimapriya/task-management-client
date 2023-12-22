import {
 
  FaHome,
  FaList,
  FaPen,
 
  FaUser,
  FaUserCircle,
} from "react-icons/fa";

import { NavLink, Outlet } from "react-router-dom";

const Dasboard = () => {
  return (
    <div>
      <div className="flex ">
        {/* dashboard sidebar */}
        <div className="w-32 md:w-52 min-h-screen bg-blue-700 text-white">
          <ul className="menu">
            {/* shared navlinks */}
            <div className="divider"></div>
            <li className="p-4 text-xs md:text-base">
              <NavLink to="/dashboard/profile">
                <FaUserCircle></FaUserCircle> My profile
              </NavLink>
            </li>

            <li className="p-4 text-xs md:text-base">
              <NavLink to="/dashboard/task">
                <FaPen></FaPen> Add Task
              </NavLink>
            </li>
            
            <li className="p-4 text-xs md:text-base">
              <NavLink to="/dashboard/allTAsk">
                <FaList></FaList> TODO List
              </NavLink>
            </li>

            <div className="divider"></div>
            <li className="p-4 text-xs md:text-base">
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            
          </ul>
        </div>
        {/* dashboard content */}
        <div className="flex-1 bg-slate-300">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dasboard;
