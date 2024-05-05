import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Define a function to fetch posts from the backend
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
