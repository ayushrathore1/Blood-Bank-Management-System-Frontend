import React from "react";
import PropTypes from "prop-types";

export function RequestCard({ request }) {
  // Tailwind status colors
  const statusStyles = {
    approved: "bg-green-100 text-green-700 px-2 py-1 rounded font-semibold",
    pending: "bg-yellow-100 text-yellow-700 px-2 py-1 rounded font-semibold",
    rejected: "bg-red-100 text-red-700 px-2 py-1 rounded font-semibold",
  };
  const statusClass =
    statusStyles[request.status] ||
    "bg-gray-100 text-gray-800 px-2 py-1 rounded font-semibold";

  return (
    <div
      className="bg-purple-50 border border-purple-200 rounded-xl shadow px-6 py-4 mb-4 flex flex-col gap-2 font-sans transition hover:shadow-lg"
      aria-label={`Request for ${request.patientName}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-purple-700">Patient Name:</span>
        <span className="font-bold text-lg text-purple-900">
          {request.patientName}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Blood Type:</span>
        <span className="text-base text-gray-900">{request.bloodType}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Units Needed:</span>
        <span className="text-base text-gray-900">{request.units}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Status:</span>
        <span className={statusClass}>
          {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
        </span>
      </div>
      {request.requestedAt && (
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Requested At:</span>
          <span className="text-base text-gray-900">
            {new Date(request.requestedAt).toLocaleString()}
          </span>
        </div>
      )}
    </div>
  );
}

RequestCard.propTypes = {
  request: PropTypes.shape({
    patientName: PropTypes.string.isRequired,
    bloodType: PropTypes.string.isRequired,
    units: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    requestedAt: PropTypes.string,
  }).isRequired,
};

export default RequestCard;
