import { useState } from "react";
import { useAuth } from "../store/auth";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Navbar = () => {
  const { isLogedin, user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        <div className="flex items-center space-x-3 text-white text-2xl font-extrabold tracking-wide drop-shadow-lg">
          <span className="text-3xl animate-pulse">✪</span>
          <span>Subhrat</span>
        </div>

        <button
          className="text-white text-3xl lg:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        <div className="hidden lg:flex items-center space-x-8 text-lg font-semibold text-white">
          <Link to="/Portfolio/" className="hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200">Home</Link>
          <Link to="/Portfolio/About" className="hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200">Projects</Link>
          <Link to="/Portfolio/Skills" className="hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200">Skills</Link>
          <Link to="/Portfolio/Contact" className="hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200">Contact</Link>
          {user?.isAdmin && (
            <Link to="/Portfolio/Admin" className="hover:text-yellow-300 hover:underline underline-offset-4 transition-all duration-200">Admin</Link>
          )}
        </div>

        <div className="hidden lg:flex space-x-3">
          {!isLogedin ? (
            <Link to="/Portfolio/Login" className="bg-white text-pink-600 hover:bg-pink-100 font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300">Login</Link>
          ) : (
            <Link to="/Portfolio/Logout" className="bg-white text-pink-600 hover:bg-pink-100 font-semibold py-2 px-5 rounded-full shadow-md transition-all duration-300">Logout</Link>
          )}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-4 space-y-3 bg-gradient-to-r from-blue-600 via-purple-600 to-fuchsia-600 text-white font-semibold text-lg">
          <Link to="/Portfolio/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/Portfolio/About" className="block hover:text-yellow-300">Projects</Link>
          <Link to="/Portfolio/Skills" className="block hover:text-yellow-300">Skills</Link>
          <Link to="/Portfolio/Contact" className="block hover:text-yellow-300">Contact</Link>
          {!isLogedin ? (
            <Link to="/Portfolio/Login" className="block mt-2 bg-white text-pink-600 text-center py-2 rounded-full shadow-md hover:bg-pink-100 transition">Login</Link>
          ) : (
            <Link to="/Portfolio/Logout" className="block mt-2 bg-white text-pink-600 text-center py-2 rounded-full shadow-md hover:bg-pink-100 transition">Logout</Link>
          )}
        </div>
      )}
    </nav>
  );
};
