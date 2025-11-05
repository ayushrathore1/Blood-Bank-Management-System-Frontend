import React, { useState } from "react";
import { addRequest } from "../api/request";
import { useAuth } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const RequestForm = () => {
  const [form, setForm] = useState({
    patientName: "",
    bloodType: "",
    units: 1,
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
      await addRequest(form, token);
      navigate("/requests");
    } catch (err) {
      setError(err.message || "Could not submit request.");
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
        <h2 className="text-3xl font-bold text-red-700 mb-2 text-center">
          Blood Request Form
        </h2>

        <div className="flex flex-col gap-2">
          <label htmlFor="patientName" className="text-sm font-medium text-gray-700">
            Patient Name
          </label>
          <input
            id="patientName"
            name="patientName"
            placeholder="Patient Name"
            value={form.patientName}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="bloodType" className="text-sm font-medium text-gray-700">
            Blood Type
          </label>
          <input
            id="bloodType"
            name="bloodType"
            placeholder="Blood Type"
            value={form.bloodType}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="units" className="text-sm font-medium text-gray-700">
            Units Needed
          </label>
          <input
            id="units"
            name="units"
            type="number"
            min="1"
            placeholder="Units Needed"
            value={form.units}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-md px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-red-400 transition"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-red-600 text-white font-semibold py-2 px-4 rounded-md shadow hover:bg-red-700 transition disabled:opacity-50"
        >
          {loading ? "Submitting..." : "Submit Request"}
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

export default RequestForm;
