import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/auth";

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  // Helper for active style class using Tailwind
  const navLinkClass = ({ isActive }) =>
    isActive
      ? "px-3 py-2 rounded bg-blue-600 text-white font-bold shadow"
      : "px-3 py-2 rounded hover:bg-blue-100 text-blue-700 font-medium transition";

  return (
    <nav
      className="bg-white border-b border-gray-200 flex flex-wrap items-center justify-between px-6 py-3 shadow-sm"
      aria-label="Main navigation"
    >
      {/* Logo/Brand */}
      <NavLink
        to="/"
        className="text-2xl font-black text-blue-700 tracking-tight hover:text-blue-900"
        end
      >
        BloodBank
      </NavLink>

      {/* Navigation Links */}
      <div className="flex gap-2 items-center flex-wrap">
        <NavLink to="/blood-units" className={navLinkClass}>
          Blood Units
        </NavLink>
        <NavLink to="/donors" className={navLinkClass}>
          Donors
        </NavLink>
        <NavLink to="/requests" className={navLinkClass}>
          Requests
        </NavLink>
        {user && user.role === "admin" && (
          <NavLink to="/admin" className={navLinkClass}>
            Admin
          </NavLink>
        )}
      </div>

      {/* Auth/Account Links */}
      <div className="flex gap-3 items-center flex-wrap">
        {user ? (
          <>
            <NavLink
              to="/profile"
              className="bg-gray-100 px-3 py-2 rounded text-gray-800 font-semibold hover:bg-blue-50 transition"
            >
              {user.name}
            </NavLink>
            <button
              type="button"
              onClick={handleLogout}
              className="bg-red-600 text-white px-3 py-2 rounded font-semibold hover:bg-red-700 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/login"
              className="bg-blue-100 px-3 py-2 rounded text-blue-700 font-semibold hover:bg-blue-200 transition"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="bg-green-100 px-3 py-2 rounded text-green-700 font-semibold hover:bg-green-200 transition"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
