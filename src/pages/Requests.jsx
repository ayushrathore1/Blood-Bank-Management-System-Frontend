import React, { useEffect, useState } from "react";
import { getRequests } from "../api/request";
import RequestCard from "../components/RequestCard";

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchRequests() {
      try {
        const res = await getRequests();
        setRequests(res.requests || []);
      } catch (err) {
        setError(err.message || "Failed to fetch requests.");
      } finally {
        setLoading(false);
      }
    }
    fetchRequests();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <span className="animate-spin rounded-full border-4 border-red-500 border-t-transparent w-8 h-8 mb-4"></span>
        <span className="text-gray-500 text-lg">Loading requests...</span>
      </div>
    );
  if (error)
    return (
      <div className="bg-red-50 rounded-lg border border-red-200 p-6 mt-10 max-w-lg mx-auto text-center text-red-700">
        <span className="font-semibold text-lg">Error:</span> {error}
      </div>
    );

  return (
    <section className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-xl shadow ring-1 ring-gray-200">
      <h2 className="text-2xl font-bold text-red-700 mb-6 text-center">
        Blood Requests
      </h2>
      {requests.length === 0 ? (
        <div className="bg-gray-100 text-gray-700 p-6 rounded border border-gray-300 text-center">
          No active blood requests.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {requests.map((req) => (
            <RequestCard key={req._id} request={req} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Requests;
