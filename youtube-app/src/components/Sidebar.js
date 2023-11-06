import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //Early return
  if (!isMenuOpen) return null;
  return (
    <div>
      <ul>
        <li>
          <Link to="/">🏠 Home</Link>
        </li>
        <li>▶️ Shorts</li>
        <li>🔴 Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscription</h1>
      <ul>
        <li>🎵 Music</li>
        <li> ⚽ Sports</li>
        <li>🎮Gaming</li>
        <li>🎧 Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Controls</h1>
      <ul>
        <li> ⚙️ Settings</li>
        <li> 🎌 Report History</li>
        <li>❓ Help </li>
        <li>®️ Send Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
