import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests

export default function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define a function to fetch posts data from the backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/v1/posts'); // Make GET request to fetch posts
        setPosts(response.data); // Set fetched posts data to state
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      {/* Map over the fetched posts and render them */}
      {posts.map((post) => (
        <div key={post.id} className="post">
          <div className="postWrapper">
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  className="postProfileImg"
                  src={post.user.profilePicture}
                  alt=""
                />
                <span className="postUsername">{post.user.username}</span>
                <span className="postDate">{post.date}</span>
              </div>
              <div className="postTopRight">
                <MoreVert />
              </div>
            </div>
            <div className="postCenter">
              <span className="postText">{post.content}</span>
              <img className="postImg" src={post.image} alt="" />
            </div>
            <div className="postBottom">
              <div className="postBottomLeft">
                <span className="postLikeCounter">{post.likes}likes</span>
              </div>
              <div className="postBottomRight">
                <span className="postCommentText">{post.comments} comments</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
