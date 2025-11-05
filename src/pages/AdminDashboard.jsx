import React, { useEffect, useState } from "react";
import { getBloodUnits } from "../api/blood";
import { getRequests } from "../api/request";
import { getDonors } from "../api/donor";
import { useAuth } from "../utils/auth";

const AdminDashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    bloodUnits: 0,
    requests: 0,
    donors: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const [bloodRes, reqRes, donorRes] = await Promise.all([
          getBloodUnits(),
          getRequests(),
          getDonors(),
        ]);
        setStats({
          bloodUnits: bloodRes.bloodUnits?.length || 0,
          requests: reqRes.requests?.length || 0,
          donors: donorRes.donors?.length || 0,
        });
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 rounded shadow-md mt-12">
        <span className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent w-8 h-8 mb-4"></span>
        <span className="text-gray-500 text-lg">Loading dashboard...</span>
      </div>
    );

  return (
    <section className="max-w-xl mx-auto mt-8 p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-200">
      <h2 className="text-3xl font-bold text-blue-700 mb-4">Admin Dashboard</h2>
      <div className="mb-6 flex items-center gap-2 text-gray-600">
        <span className="font-semibold">Welcome:</span>
        <span className="text-lg font-medium text-gray-900">{user?.name}</span>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-center">
        <li className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <span className="block text-lg font-bold text-blue-700">
            {stats.bloodUnits}
          </span>
          <span className="text-sm text-gray-800">Blood Units</span>
        </li>
        <li className="bg-green-50 border border-green-200 rounded-xl p-4">
          <span className="block text-lg font-bold text-green-700">
            {stats.requests}
          </span>
          <span className="text-sm text-gray-800">Total Requests</span>
        </li>
        <li className="bg-pink-50 border border-pink-200 rounded-xl p-4">
          <span className="block text-lg font-bold text-pink-700">
            {stats.donors}
          </span>
          <span className="text-sm text-gray-800">Registered Donors</span>
        </li>
      </ul>
      {/* Add more cards/charts/tasks for advanced dashboard features here */}
    </section>
  );
};

export default AdminDashboard;
