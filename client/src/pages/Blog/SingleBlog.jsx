import HomeLayout from "../../layout/HomeLayout";
import './SingleBlog.css'; 
import glitchImage from './image 31.png' ;
import codeImage from './image 38.png';
import backgroundImg from './Main-background.png';


export default function SingleBlog({ title }) {
    return (
        <HomeLayout>
           
            {/* Main Background */}
            {/* <div className="main-background" /> */}
            <div className="main-background"></div>


            <div className="blog-content-wrapper">
                {/* Blog Title and Author Details */}
                <div className="blog-header">
                    <h1 className="blog-title">Lorem ipsum dolor sit amet, consectetur</h1>
                    <div className="blog-author-info">
                        <p className="author">Username | Jan 21, 2024</p>
                        <div className="interaction-info">
                            <span> 38K</span>
                            <span> 1026</span>
                        </div>
                    </div>
                </div>

                {/* Blog Image Section */}
                <div className="blog-image-section">
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                         esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                          mollit anim id est laborum.</p>
                    <div className="blog-image">
                        <img src={glitchImage} alt="Glitch effect" />
                    </div>
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p className="blog-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                {/* Code Snippet Section */}
                <div className="code-block">
                    <div className="code-background">
                        <img src={codeImage} alt="Code snippet" />
                    </div>
                </div>
            </div>  
        </HomeLayout>
    );
}
