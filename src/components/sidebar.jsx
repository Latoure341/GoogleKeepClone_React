import React, { useState } from 'react';
import './component_styles/sidebar.css'

function sidebar(props) {
  const [miniSidebar, setMiniSidebar] = useState(true);
  const { isMiniSidebar } = props;

  const handleMouseOut = () => {
    setMiniSidebar(true);
    document.querySelector('.sidebar').classList.remove('sidebar-shadow');
  
  }
  const handleMouserOver = () => {
    setMiniSidebar(false);
    document.querySelector('.sidebar').classList.add('sidebar-shadow');
  }
  
  return (
    <>
      <div className={`sidebar ${(miniSidebar && isMiniSidebar) ? "" : "sidebar-shadow"}`} onMouseOver={handleMouserOver} onMouseOut={handleMouseOut}
      style={(miniSidebar && isMiniSidebar) ? { width: '70px' } : { width: '250px' }} >
        <div className={(miniSidebar && isMiniSidebar) ? "sidebar-item active-bar" : 'sidebar-item active-bar sidebar-active-item'}>
          <span className="material-symbols-outlined active">lightbulb</span>
          <span className="sidebar-text">Notes</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined"> notifications </span>
          <span className="sidebar-text">Reminders</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined"> edit </span>
          <span className="sidebar-text">Edit Labels</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined"> archive </span>
          <span className="sidebar-text">Archive</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined"> delete </span>
          <span className="sidebar-text">Trash</span>
        </div>
      </div>
    </>
  );
}

export default sidebar;
