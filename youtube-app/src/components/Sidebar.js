import React from "react";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  return (
    <div className="p-5 shadow-lg col-span-1">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      {/* <MenuItems /> */}
      <h1>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
