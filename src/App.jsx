import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import PostList from "./components/PostList";
import Form from "./components/Form";
import PostListProvider from "./store/PostListStore";
import { Outlet } from "react-router-dom";

function App() {
  let [selectedTab, setSelectedTab] = useState("Home");

  let handleTab = (tablet) => {
    setSelectedTab(tablet);
  };

  return (
    <>
      <PostListProvider>
        <Navbar></Navbar>
        <div className="content">
          <Sidebar handleTab={handleTab} selectedTab={selectedTab}></Sidebar>
          <Outlet></Outlet>
          {/* {selectedTab === "Home" ? <PostList></PostList> : null}
          {selectedTab === "Create Post" ? <Form></Form> : null}  */}
        </div>
        <Footer></Footer>
      </PostListProvider>
    </>
  );
}

export default App;
