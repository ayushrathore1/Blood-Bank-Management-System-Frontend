import React from "react";

const Home = () => (
  <main className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-50 px-4 py-12">
    <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700 mb-6 text-center drop-shadow">
      Blood Bank Management System
    </h1>
    <p className="text-lg text-gray-700 max-w-xl mb-8 text-center">
      Welcome to Medha's Blood Bank platform. Easily view available blood units,
      register as a donor, request blood, or log in for more features.
    </p>
    <ul className="space-y-3 text-base font-medium text-left bg-white p-6 rounded-xl shadow max-w-md w-full mb-4 border border-gray-200">
      <li>
        <span className="text-blue-600 font-bold">•</span> See current{" "}
        <b className="text-blue-700">Blood Units</b>
      </li>
      <li>
        <span className="text-green-600 font-bold">•</span> Register or find{" "}
        <b className="text-green-700">Donors</b>
      </li>
      <li>
        <span className="text-red-600 font-bold">•</span> Submit and track{" "}
        <b className="text-red-700">Blood Requests</b>
      </li>
    </ul>
  </main>
);

export default Home;
