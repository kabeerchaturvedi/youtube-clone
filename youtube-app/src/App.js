import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";

import store from "../src/utils/store";
import { Provider } from "react-redux";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Header />
        {/* 
  
  Header
  Sidebar 
   MenuItems
  Body
   MainContainer
    ButtonList
    VideoContainer
      VideoCard 
  
  
  */}
        <Body />
      </Provider>
    </div>
  );
}
