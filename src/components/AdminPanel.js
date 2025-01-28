import React from "react";

const AdminPanel = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Admin Panel</h1>
        <p className="text-gray-600 text-center">
          Welcome to the Admin Panel! You have successfully logged in.
        </p>
      </div>
    </div>
  );
};

export default AdminPanel;
