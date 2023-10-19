import React from "react";
import Maincontainer from "./Maincontainer";
import Sidebar from "./Sidebar";

const Body = () => {
  return (
    <div className="grid">
      <Sidebar/>
      <Maincontainer />
    </div>
  );
};

export default Body;
