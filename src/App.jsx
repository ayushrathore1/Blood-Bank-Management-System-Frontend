import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./utils/ProtectedRoute.jsx"; // (or .js, match your file)
import ErrorBoundary from "./utils/ErrorBoundary.jsx"; // (or .js, match your file)
import "./App.css"; // App-specific or shared component styles

// Routed page components - code splitting for performance
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Profile = lazy(() => import("./pages/Profile"));
const BloodUnits = lazy(() => import("./pages/BloodUnits"));
const Donors = lazy(() => import("./pages/Donors"));
const Requests = lazy(() => import("./pages/Requests"));
const RequestForm = lazy(() => import("./pages/RequestForm"));
const DonorForm = lazy(() => import("./pages/DonorForm"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Suspense fallback={<div className="loading">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/blood-units" element={<BloodUnits />} />
            <Route path="/donors" element={<Donors />} />
            <Route path="/requests" element={<Requests />} />
            <Route
              path="/request"
              element={
                <ProtectedRoute>
                  <RequestForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/donor"
              element={
                <ProtectedRoute>
                  <DonorForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
      <Footer />
    </Router>
  );
}

export default App;
