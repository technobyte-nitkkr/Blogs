import React, { useState } from "react";
import "../Admin/AdminDashboard.css";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("draft");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="gradient-line"></div>
      <aside className="sidebar">
        <div className="profile-section">
          <img
            className="profile-pic"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QdQEdjb9ZYdAu7mVC9TpcIIiRcE6PI728i0l712cFUyvswbgtEbCtvpGu9r03XxYOKg&usqp=CAU"
            alt="Profile"
          />
          <p className="username">Username</p>
          <button className="edit-profile-btn">
            <i className="fas fa-pencil-alt"></i> Edit Profile
          </button>
        </div>
        <div className="settings-help">
          <div className="settings">
            <i className="fas fa-cog"></i> Settings
          </div>
          <div className="help">
            <i className="fas fa-question-circle"></i> Help
          </div>
        </div>
      </aside>

      {/* Tabs Section */}
      <div className="tab-container">
        <a
          href="#"
          className={activeTab === "draft" ? "tab active" : "tab inactive"}
          onClick={() => handleTabSwitch("draft")}
        >
          Draft
        </a>
        <a
          href="#"
          className={activeTab === "published" ? "tab active" : "tab inactive"}
          onClick={() => handleTabSwitch("published")}
        >
          Published
        </a>
      </div>
      <div className="line-gradient"></div>

      {/* Content Switching Based on Active Tab */}
      <div className="blog-list">
        {activeTab === "draft" && (
          <>
            {/* Draft Blog Cards */}
            {[1, 2, 3].map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-content">
                  <h3>Title</h3>
                  <p>
                    Draft content... Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                  <div className="edit-section">
                    <span>last edited 5 days ago</span>
                    <button className="edit-btn">Edit</button>
                  </div>
                </div>
                <div className="blog-image">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfeJXWuc3Qla7qsjLMi-NCkYyGjqX7goJNIHdUd4UekEjFWCP3"
                    alt="Blog Thumbnail"
                  />
                </div>
              </div>
            ))}
          </>
        )}

        {activeTab === "published" && (
          <>
            {/* Published Blog Cards */}
            {[1, 2, 3].map((blog, index) => (
              <div key={index} className="blog-card">
                <div className="blog-content">
                  <h3>Title</h3>
                  <p>
                    Published content... Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit.
                  </p>
                  <div className="edit-section">
                    <span>Published 10 days ago</span>
                    <button className="edit-btn">View</button>
                  </div>
                </div>
                <div className="blog-image">
                  <img
                    src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSfeJXWuc3Qla7qsjLMi-NCkYyGjqX7goJNIHdUd4UekEjFWCP3"
                    alt="Blog Thumbnail"
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
