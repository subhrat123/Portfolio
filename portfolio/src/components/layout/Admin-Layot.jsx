import { Navigate, NavLink, Outlet } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { useAuth } from "../../store/auth";

export const AdminLayot = () => {
   const { isLogedin,user } = useAuth();
   if (!isLogedin) {
      return <Navigate to="/Login" />;
   }
     if (user.role !== "admin") return <Navigate to="/" />;
  return (
    
    <>
      <header className="bg-gradient-to-r from-purple-700 to-indigo-700 py-4 shadow-lg">
        <div className="container mx-auto flex justify-center">
          <nav className="flex gap-6">
            <NavLink
              to="/admin/projects"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-white shadow-md ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`
              }
            >
              <FaUsers className="text-xl" />
              Projects
            </NavLink>

            <NavLink
              to="/admin/skills"
              className={({ isActive }) =>
                `flex items-center gap-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 text-white shadow-md ${
                  isActive
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`
              }
            >
              <MdContactPage className="text-xl" />
              Skills
            </NavLink>
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};
