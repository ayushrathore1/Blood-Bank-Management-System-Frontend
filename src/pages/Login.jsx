import React, { useState } from "react";
import { login } from "../api/auth";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { login: saveAuth } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const data = await login(form);
      saveAuth(data.user, data.token);
      navigate("/");
    } catch (err) {
      setError(err.message || "Invalid username or password.");
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
          Login
        </h2>

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

        <button
          type="submit"
          disabled={loading}
          className={`bg-blue-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-blue-700 transition disabled:opacity-50`}
        >
          {loading ? "Logging in..." : "Login"}
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

export default Login;
