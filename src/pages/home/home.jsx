import { useState } from "react";
import { CloseSquare, Menu } from "iconsax-react";
import "./home.scss";

export const Home = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="home-container">
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <button className="close-btn" onClick={closeSidebar}>
          <CloseSquare />
        </button>
        <div className="sidebar-item">Item 1</div>
        <div className="sidebar-item">Item 2</div>
        <div className="sidebar-item">Item 3</div>
      </div>
      <div className="main-content">
        <div className="header">
          <button className="menu-btn" onClick={toggleSidebar}>
            <Menu size={20}/>
          </button>
        </div>
        <div className="canvas">
          <div className="canvas-info">
            <p>Drag from below or double click</p>
            <p>Space + Drag to pan</p>
            <p>Ctrl + Scroll to zoom</p>
          </div>
        </div>
      </div>
    </div>
  );
};
