
import HomeLayout from "../../layout/HomeLayout";
import './SingleBlog.css'; 
import glitchImage from './image 31.png';
import codeImage from './image 38.png';
import profileImage from './profile.png'; 
import likeIcon from './like-icon.png'; 
import commentIcon from './comment-icon.png'; 

export default function SingleBlog({ title }) {
    return (
        <HomeLayout>
            {/* Main Background */}
            <div className="main-background"></div>

            <div className="blog-content-wrapper">
                {/* Blog Title and Author Details */}
                <div className="blog-header">
                    <h1 className="blog-title">Lorem ipsum dolor sit amet, consectetur</h1>
                    <div className="blog-author-info">
                        {/* Profile Image and Name */}
                        <div className="author-profile">
                            <img className="profile-image" src={profileImage} alt="Author" />

                            <div className="author-details">
                                 <p className="author-name">Username</p>
                                 <p className="author-date">Jan 21, 2024</p>
                            </div>

                        </div>

                        {/* Edit Button */}
                        <button className="edit-button">Edit</button>
                    </div>
                    {/* Interaction Section */}
                    <div className="interaction-info">
                        {/* Horizontal line above */}
                        <div className="horizontal-line"></div>

                        {/* Likes and Comments */}
                        <div className="likes-comments">
                            <div className="icon-container">
                                <img src={likeIcon} alt="Like" className="interaction-icon" />
                                <span>38K</span>
                            </div>
                            <div className="icon-container">
                                <img src={commentIcon} alt="Comments" className="interaction-icon" />
                                <span>1026</span>
                            </div>
                        </div>

                        {/* Horizontal line below */}
                        <div className="horizontal-line"></div>
                    </div>
                </div>

                {/* Blog Image Section */}
                <div className="blog-image-section">
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <div className="blog-image">
                        <img src={glitchImage} alt="Glitch effect" />
                    </div>
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                   <br/>
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                {/* Code Snippet Section */}
                <div className="code-block">
                    <div className="code-background">
                        <img src={codeImage} alt="Code snippet" />
                    </div>
                </div>

                {/* Interaction Section */}
                <div className="interaction-info">
                        <div className="horizontal-line"></div>

                        {/* Likes and Comments */}
                        <div className="likes-comments">
                            <div className="icon-container">
                                <img src={likeIcon} alt="Like" className="interaction-icon" />
                                <span>38K</span>
                            </div>
                            <div className="icon-container">
                                <img src={commentIcon} alt="Comments" className="interaction-icon" />
                                <span>1026</span>
                            </div>
                        </div>

                        <div className="horizontal-line"></div>
                    </div>
            </div>
        </HomeLayout>
    );
}
