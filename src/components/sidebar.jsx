import React, { useState } from 'react';
import './component_styles/sidebar.css'

function sidebar() {
  const [miniSidebar, setMiniSidebar] = useState(true);

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
      <div className="sidebar" onMouseOver={handleMouserOver} onMouseOut={handleMouseOut}
      style={miniSidebar ? { width: '70px' } : { width: '250px' }}>
        <div className={miniSidebar ? "sidebar-item active-bar" : 'sidebar-item active-bar sidebar-active-item'}>
          <span className="material-symbols-outlined hover active">lightbulb</span>
          <span className="sidebar-text">Notes</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> notifications </span>
          <span className="sidebar-text">Reminders</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> edit </span>
          <span className="sidebar-text">Edit Labels</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> archive </span>
          <span className="sidebar-text">Archive</span>
        </div>
        <div className="sidebar-item">
          <span className="material-symbols-outlined hover"> delete </span>
          <span className="sidebar-text">Trash</span>
        </div>
      </div>
    </>
  );
}

export default sidebar;
