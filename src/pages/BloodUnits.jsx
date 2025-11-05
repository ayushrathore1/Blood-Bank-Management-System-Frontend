import React, { useEffect, useState } from "react";
import { getBloodUnits } from "../api/blood";
import BloodUnitCard from "../components/BloodUnitCard";

const BloodUnits = () => {
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUnits() {
      try {
        const res = await getBloodUnits();
        setUnits(res.bloodUnits || []);
      } catch (err) {
        setError(err.message || "Failed to load blood units.");
      } finally {
        setLoading(false);
      }
    }
    fetchUnits();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <span className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent w-8 h-8 mb-4"></span>
        <span className="text-gray-500 text-lg">Loading blood units...</span>
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
      <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
        Available Blood Units
      </h2>
      {units.length === 0 ? (
        <div className="bg-gray-100 text-gray-700 p-6 rounded border border-gray-300 text-center">
          No blood units available at the moment.
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {units.map((unit) => (
            <BloodUnitCard key={unit._id} unit={unit} />
          ))}
        </div>
      )}
    </section>
  );
};

export default BloodUnits;
