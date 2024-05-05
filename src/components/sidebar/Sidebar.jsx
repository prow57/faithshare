import "./sidebar.css";
import {IoChatbox} from "react-icons/io5";
import {FaBookmark, FaPlayCircle} from "react-icons/fa";
import { MdFeed, MdGroups2, MdChurch, MdEvent } from "react-icons/md";
import { useEffect, useState } from "react";
import axios from "axios";


export default function Sidebar() {
  
  const [users, setUsers] = useState([]);
  const token = localStorage.getItem("token");

  // Fetch users data from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users data:", error));
  }, []);

  // Render the component with fetched users data
  return (
  
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <MdFeed className="sidebarIcon" />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <IoChatbox className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <FaPlayCircle className="sidebarIcon" />
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <MdGroups2 className="sidebarIcon" />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <FaBookmark className="sidebarIcon" />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <MdChurch className="sidebarIcon" />
          <span className="sidebarListItemText">Church</span>
        </li>
        <li className="sidebarListItem">
          <MdEvent className="sidebarIcon" />
          <span className="sidebarListItemText">Events</span>
        </li>
      
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
        <ul className="sidebarList">
          {users.map(user => (
            <li className="sidebarListItem" key={user.id}>
              <MdFeed className="sidebarIcon" />
              <span className="sidebarListItemText">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
