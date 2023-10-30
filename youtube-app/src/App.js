import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react";
import store from "../src/utils/store";

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
