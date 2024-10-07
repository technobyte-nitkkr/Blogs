import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Users</h2>
          <p className="text-gray-700">1500</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Posts</h2>
          <p className="text-gray-700">750</p>
        </div>

        <div className="p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Total Comments</h2>
          <p className="text-gray-700">1250</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;