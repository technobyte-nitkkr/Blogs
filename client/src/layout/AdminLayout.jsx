import React from 'react';
import AdminHeader from '../components/Admin/Header/AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      {/* Content */}
      <main className="admin-content p-6 bg-gray-100 min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;