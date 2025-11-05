import React, { useEffect, useState } from "react";
import { getProfile } from "../api/auth";
import { useAuth } from "../utils/auth";

const Profile = () => {
  const { token, user } = useAuth();
  const [profile, setProfile] = useState(user || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProfile() {
      try {
        const res = await getProfile(token);
        setProfile(res.user);
      } catch (err) {
        setError(err.message || "Failed to load profile.");
      } finally {
        setLoading(false);
      }
    }
    if (token && !user) fetchProfile();
    else setLoading(false);
  }, [token, user]);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <span className="animate-spin rounded-full border-4 border-blue-500 border-t-transparent w-8 h-8 mb-4"></span>
        <span className="text-gray-500 text-lg">Loading profile...</span>
      </div>
    );
  if (error)
    return (
      <div className="bg-red-50 rounded-lg border border-red-200 p-6 mt-10 max-w-lg mx-auto text-center text-red-700">
        <span className="font-semibold text-lg">Error:</span> {error}
      </div>
    );

  return (
    <section className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow ring-1 ring-gray-200 flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
        {profile.name}
      </h2>
      <div className="flex flex-col gap-2 text-gray-700 text-base">
        <div>
          <span className="font-semibold">Email:</span> {profile.email}
        </div>
        <div>
          <span className="font-semibold">Role:</span> {profile.role}
        </div>
        <div>
          <span className="font-semibold">Contact:</span> {profile.contact}
        </div>
      </div>
    </section>
  );
};

export default Profile;
