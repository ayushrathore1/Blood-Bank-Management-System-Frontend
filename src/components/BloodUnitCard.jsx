import React from "react";
import PropTypes from "prop-types";

export function BloodUnitCard({ unit }) {
  return (
    <div
      className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 shadow hover:shadow-lg transition mb-4 flex flex-col gap-2 font-sans"
      aria-label={`Blood unit type ${unit.bloodType}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-blue-700">Blood Type:</span>
        <span className="text-lg font-bold text-blue-900">
          {unit.bloodType}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Quantity:</span>
        <span className="text-base text-gray-900">{unit.quantity} units</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Donor:</span>
        <span className="text-base text-gray-900">
          {unit.donorName ? unit.donorName : "Anonymous"}
        </span>
      </div>
      {unit.expiresAt && (
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Expires:</span>
          <span className="text-base text-gray-900">
            {new Date(unit.expiresAt).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

BloodUnitCard.propTypes = {
  unit: PropTypes.shape({
    bloodType: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    donorName: PropTypes.string,
    expiresAt: PropTypes.string,
  }).isRequired,
};

export default BloodUnitCard;
