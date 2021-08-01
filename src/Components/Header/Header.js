import React, {useState} from "react";
import './Header.css'
import Invite from '../Invite/Invite'
import BrandName from '../BrandName/BrandName'


function Header({toggleSidebar,setToggleSidebar}) {
  const invites = [];
  const notifications = [];
  const searchResults = []; 

  const [showNotifications, setshowNotifications] = useState(false);
  const [showInvites, setShowInvites] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [mobileSearchTab, setMobileSearchTab] = useState(false);

  const handleInviteClick = () => {
    setShowInvites(!showInvites);
    setshowNotifications(false);
  }

  const handleNotificationClick = () => {
    setshowNotifications(!showNotifications);
    setShowInvites(false);
  }
  
  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  }
  const fillData = (data,array,types) => {
    // data from api
    for (let i =0;i<6;i++){
      array.push(<Invite key={i} type={types}/>)
    }
  } 
  const data = {};
  // yha pe state nhi banana, isliye array se kr rhe, agr state se krna hai toh application state banake krna better rhega
  fillData(data,invites,"invite");
  fillData(data,notifications,"notif");
  fillData(data,searchResults,"search");
 
  
  return( 
  <div className="header">
    <div className="brandNameContainer">
       <BrandName/>
     </div>
    <div className="searchBarAnEventBtn">
     <div className="searchBar">
          <input type="text" className="searchInput" spellCheck="false" value={searchText} onInput={(event) => setSearchText(event.target.value) } placeholder="Search your events...." />
          {searchText ? <i className="fa fa-times" style={{fontSize:"16px"}} onClick={() => setSearchText('')} id="searchIcon" />  : <i className="fa fa-search" id="searchIcon" />  }
          <div className={searchText ? "mainSearchResults show" : "mainSearchResults"}>
            {searchResults}
          </div>
     </div>
      <button className="addEventBtn"><i className="fa fa-plus"></i>Add Event</button>
      </div>
      <div className="headerIcons">
          <a href="#" className="invites" title="Invites" onClick={handleInviteClick}><i className={showInvites ? "fa fa-times fa-lg" : "fa fa-user-plus"} /></a>
          <a href="#" className="notificationsBell" title="Notifications" onClick={handleNotificationClick}><i className={showNotifications ? "fa fa-times fa-lg" :"fa fa-bell" }/></a>
      </div>
        <a href="#" className="toggleSidebar" title="Toggle Sidebar" onClick={() => handleSidebarToggle()}><i className={toggleSidebar ? "fa fa-times fa-lg" : "fa fa-bars"} /></a>
      <div className={showInvites ? "allInvites show" : "allInvites"}>
            <h4 style={{textAlign: 'center', padding: '10px', borderBottom: '1px solid #E2E8F0'}}>Invites</h4>
            <div className="invitesList">
              {invites.length == 0 ? (<p style={{color:"#2D3748",fontSize:"14px",textAlign:"center",marginTop:"12px"}}>Nothing to show here</p>) : invites}
            </div>
          </div>

          <div className={showNotifications ? "allNotifications show" : "allNotifications"}>
            <h4 style={{textAlign: 'center', padding: '10px', borderBottom: '1px solid #E2E8F0'}}>Notifications</h4>
            <div className="invitesList">
              {notifications.length == 0 ? (<p style={{color:"#2D3748",fontSize:"14px",textAlign:"center",marginTop:"12px"}}>Nothing to show here</p>) : notifications}
            </div>
          </div>
    <div className={mobileSearchTab ? "mobileSearchResults show" : "mobileSearchResults"}>
      <i className="fa fa-arrow-left" onClick={() => setMobileSearchTab(!mobileSearchTab)}></i>
    </div>
    <div className="bottomMobileNavbar">
          <a href="#" className="invites" title="Invites" onClick={handleInviteClick}><i className={showInvites ? "fa fa-times fa-lg" : "fa fa-user-plus"} /></a>
          <a href="#" className="" title="search" onClick={() => setMobileSearchTab(!mobileSearchTab)}><i className="fa fa-search" /></a>
          <a href="#" className="" title="search"><i className="fa fa-plus" style={{fontSize:"19px"}} /></a>
          <a href="#" className="notificationsBell" title="Notifications" onClick={handleNotificationClick}><i className={showNotifications ? "fa fa-times fa-lg" :"fa fa-bell" }/></a>
          <a href="#" className="" title="search" ><i className="fa fa-sign-out-alt" /></a>
    </div>
  </div>
  )
}

export default Header;
