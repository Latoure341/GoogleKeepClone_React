import React, { useState, useEffect } from 'react';
import './component_styles/navbar.css'

const navbar = (props) => {
  const { setIsMiniSidebar } = props;
  const [isFocused, setIsFocused] = useState(false);
  const [inputSearch, setInputSearch] = useState(false);

  const handleClick = () => {
    setIsMiniSidebar((prevState) => {
      return !prevState;
    });
  }
  const handleSearch = () => {
    console.log('Search Clicked');
    setInputSearch((prevState) => {
      return !prevState;
    });
  }
  
  return (
    <>
      <nav>
        <div className="logo-area">

          <div className="tooltip" onClick={handleClick}>
            <span className="material-symbols-outlined hover">menu</span>
            <span className="tooltip-text">Main Menu</span>
          </div>
          <img
            className="gb_Hc gb_Hd"
            src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
            alt=""
            aria-hidden="true"
            role="presentation"
          />
          <span className="logo-text">Keep</span>
        </div>
        <div className="search-area" style={{ backgroundColor: isFocused ? 'white' : 'rgb(40,42,44)' }}>
          <div className="tooltip" >
            <span className="material-symbols-outlined hover" style={{color: isFocused && 'grey'}}>search</span>
            <span className="tooltip-text">Search</span>
          </div>
          <input type="text" placeholder="Search" 
          onFocus={() => {setIsFocused(true)}} 
          style={{ backgroundColor: isFocused ? 'white' : 'transparent', color: isFocused && 'black' }} 
          onBlur={() => setIsFocused(false)}/>
        </div>
        <div className="profile-actions-area">

          {
            inputSearch ? (
              <div className="tooltip mobileInput" >
                <span className="material-symbols-outlined hover" onClick={handleSearch}>arrow_back</span>
                <input type="text" placeholder="Search"/>
              </div>
            ) : (
              <div className="tooltip mobileSearch" onClick={handleSearch}>
                <span className="material-symbols-outlined hover">search</span>
              </div>
            )
          }

          <div className="tooltip">
            <span className="material-symbols-outlined hover">refresh</span>
            <span className="tooltip-text">Refresh</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover">view_agenda</span>
            <span className="tooltip-text">View List</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover">settings</span>
            <span className="tooltip-text">Settings</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover">apps</span>
            <span className="tooltip-text">Apps</span>
          </div>
          <div className="tooltip">
            <span className="material-symbols-outlined hover">account_circle</span>
            <span className="tooltip-text">Accounts</span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default navbar;
