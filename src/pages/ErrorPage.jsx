import React from "react";

const ErrorPage = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] bg-gray-50">
    <div className="bg-white border border-red-300 shadow-lg rounded-xl p-8 w-full max-w-md flex flex-col items-center gap-4">
      <h2 className="text-4xl font-bold text-red-700 mb-2 text-center">
        404 - Page Not Found
      </h2>
      <p className="text-gray-700 text-center mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-2 rounded shadow font-semibold text-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </a>
    </div>
  </div>
);

export default ErrorPage;
