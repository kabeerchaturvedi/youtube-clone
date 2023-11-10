import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { ToggleItem } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log(searchQuery);
    getSearchSuggestions();
    
    // const debounce = function (fn, d) {
    //   let timer;
    //   return function () {
    //     let context = this;
    //     let args = arguments;
    //     clearTimeout(timer);
    //     timer = setTimeout(() => {
    //       fn.setSearchQuery.apply(context, args);
    //     }, 200);
    //   };
    // };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const results = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await results.json();
    console.log(json[1]);
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(ToggleItem());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-16 cursor-pointer"
          alt="ham-menu "
          src="https://i.pinimg.com/564x/0b/53/d7/0b53d7e42184a1823360653f60e7d77b.jpg"
        />

        <img
          className="h-16"
          alt="youtube-logo"
          src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
        />
      </div>
      {/* Search Button */}
      <div className="flex items-center justify-center  col-span-10 px-10 ">
        <input
          type="text"
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="flex col-span-1">
        <img
          className="h-14"
          alt="bell-icon"
          src="https://static.vecteezy.com/system/resources/previews/015/304/828/original/notification-bell-icon-in-line-style-design-isolated-on-white-background-editable-stroke-vector.jpg"
        />
        <img
          className="h-14"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQCX5_wYEa6hyWoqSBOaPbaHw5Ff8Ljp0WcA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Header;
