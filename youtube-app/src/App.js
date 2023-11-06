import "./App.css";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Header from "./components/Header";
import Maincontainer from "./components/Maincontainer";
import store from "../src/utils/store";

import WatchPage from "./components/WatchPage";

export default function App() {
  const appRouter = createBrowserRouter({
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Maincontainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  });
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
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}
