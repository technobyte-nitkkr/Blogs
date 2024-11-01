import React from 'react';
import AdminHeader from '../components/Admin/Header/AdminHeader';

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      {/* Content */}
      <main className="admin-content bg-gray-100">
        {children}
      </main>
    </div>
  );
};

export default AdminLayout;