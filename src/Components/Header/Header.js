import React from "react";
import './Header.css'

function Header() {
  return( 
  <div className="header">
     <div className="searchBar">
          <input type="text" className="searchInput" placeholder="Search your events...." />
          <i className="fa fa-search" id="searchIcon" />
        </div>
        <div className="headerIcons">
          <a href="#" className="invites" title="Invites"><i className="fa fa-user-plus" /></a>
          <a href="#" className="notificationsBell" title="Notifications"><i className="fa fa-bell" /></a>
      </div>
  </div>
  )
}

export default Header;
