import React from "react";
import PropTypes from "prop-types";

export function DonorCard({ donor }) {
  return (
    <div
      className="bg-green-50 border border-green-200 rounded-xl shadow px-6 py-4 mb-4 flex flex-col gap-2 transition hover:shadow-lg"
      aria-label={`Donor ${donor.name}`}
    >
      <div className="flex justify-between items-center">
        <span className="font-semibold text-green-700">Name:</span>
        <span className="font-bold text-lg text-green-900">{donor.name}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Blood Type:</span>
        <span className="text-base text-gray-900">{donor.bloodType}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-semibold text-gray-700">Contact:</span>
        <a
          href={`tel:${donor.contact}`}
          className="text-blue-600 underline hover:text-blue-700 transition"
        >
          {donor.contact}
        </a>
      </div>
      {donor.lastDonation && (
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700">Last Donation:</span>
          <span className="text-base text-gray-900">
            {new Date(donor.lastDonation).toLocaleDateString()}
          </span>
        </div>
      )}
    </div>
  );
}

DonorCard.propTypes = {
  donor: PropTypes.shape({
    name: PropTypes.string.isRequired,
    bloodType: PropTypes.string.isRequired,
    contact: PropTypes.string.isRequired,
    lastDonation: PropTypes.string,
  }).isRequired,
};

export default DonorCard;
