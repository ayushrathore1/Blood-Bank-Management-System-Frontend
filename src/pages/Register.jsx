import React, { useState } from "react";
import { register } from "../api/auth";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";
import { validateEmail, validatePassword } from "../utils/validators";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    role: "user",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login: saveAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) return setError("Invalid email address.");
    if (!validatePassword(form.password))
      return setError("Password must be at least 8 characters.");
    setLoading(true);
    setError("");
    try {
      const data = await register(form);
      saveAuth(data.user, data.token);
      navigate("/");
    } catch (err) {
      setError(err.message || "Could not register.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
      <form
        className="bg-white w-full max-w-sm rounded-xl shadow-lg p-8 flex flex-col gap-6"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
          Register
        </h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            id="name"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact"
            className="text-sm font-medium text-gray-700"
          >
            Contact Number
          </label>
          <input
            id="contact"
            name="contact"
            placeholder="Contact Number"
            value={form.contact}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="role" className="text-sm font-medium text-gray-700">
            Role
          </label>
          <select
            id="role"
            name="role"
            value={form.role}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          >
            <option value="user">User</option>
            <option value="donor">Donor</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && (
          <div className="bg-red-100 text-red-700 text-sm p-2 rounded text-center border border-red-300">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Register;
