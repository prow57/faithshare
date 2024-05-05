import "./sidebar.css";
import { RssFeed, Chat, PlayCircleFilledOutlined, Group, Bookmark, HelpOutline, WorkOutline, Event, School } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Sidebar() {
  
  const [users, setUsers] = useState([]);

  // Fetch users data from backend
  useEffect(() => {
    axios.get("http://localhost:8080/api/v1/users")
      .then(response => setUsers(response.data))
      .catch(error => console.error("Error fetching users data:", error));
  }, []);

  // Render the component with fetched users data
  return (
  
    <div className="sidebar">
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarListItem">
          <RssFeed className="sidebarIcon" />
          <span className="sidebarListItemText">Feed</span>
        </li>
        <li className="sidebarListItem">
          <Chat className="sidebarIcon" />
          <span className="sidebarListItemText">Chats</span>
        </li>
        <li className="sidebarListItem">
          <PlayCircleFilledOutlined className="sidebarIcon" />
          <span className="sidebarListItemText">Videos</span>
        </li>
        <li className="sidebarListItem">
          <Group className="sidebarIcon" />
          <span className="sidebarListItemText">Groups</span>
        </li>
        <li className="sidebarListItem">
          <Bookmark className="sidebarIcon" />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>
        <li className="sidebarListItem">
          <HelpOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Forums</span>
        </li>
        <li className="sidebarListItem">
          <WorkOutline className="sidebarIcon" />
          <span className="sidebarListItemText">Church</span>
        </li>
        <li className="sidebarListItem">
          <Event className="sidebarIcon" />
          <span className="sidebarListItemText">Events</span>
        </li>
        <li className="sidebarListItem">
          <School className="sidebarIcon" />
          <span className="sidebarListItemText">Sermons</span>
        </li>
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarHr" />
        <ul className="sidebarList">
          {users.map(user => (
            <li className="sidebarListItem" key={user.id}>
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">{user.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
