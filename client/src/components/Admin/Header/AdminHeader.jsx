import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHeader.css';

const AdminHeader = () => {
  return (
    <header className="admin-header">
      <div className="logo">
        <Link to="/admin">
          <h1>Blogs</h1> {/* Adjust based on your app's branding */}
        </Link>
      </div>
      <nav className="admin-nav">
        <Link to="/admin/top-pics">Top Pics</Link>
        <Link to="/admin/about">About Us</Link>
        <Link to="/admin/write">Write</Link>
      </nav>
      <div className="admin-actions">
        <input type="text" className="search-input" placeholder="Search" />
        <Link to="/admin/profile">
          <i className="user-icon"> {/* Use an appropriate icon for user profile */}</i>
        </Link>
      </div>
    </header>
  );
};

export default AdminHeader;