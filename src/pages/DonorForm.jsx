import React, { useState } from "react";
import { addDonor } from "../api/donor";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const DonorForm = () => {
  const [form, setForm] = useState({
    name: "",
    bloodType: "",
    contact: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { token } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await addDonor(form, token);
      navigate("/donors");
    } catch (err) {
      setError(err.message || "Could not register donor.");
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
        <h2 className="text-3xl font-bold text-green-700 mb-2 text-center">
          Donor Registration
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
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="bloodType"
            className="text-sm font-medium text-gray-700"
          >
            Blood Type
          </label>
          <input
            id="bloodType"
            name="bloodType"
            placeholder="Blood Type"
            value={form.bloodType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition"
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
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-green-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-green-700 transition disabled:opacity-50"
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

export default DonorForm;
