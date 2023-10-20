import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul>
        <li>🏠 Home</li>
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
