import React, { useState } from "react";
import "./Header.css";
import Invite from "../Invite/Invite";
import BrandName from "../BrandName/BrandName";
// import { events } from "../eventsData";
import CreateEvent from "../CreateEvent/CreateEvent";

function Header({ toggleSidebar, setToggleSidebar }) {
  const invites = [];
  const notifications = [];
  const events = JSON.parse(localStorage.getItem('allEvents')) || [];
  
  const [showNotifications, setshowNotifications] = useState(false);
  const [showInvites, setShowInvites] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [mobileSearchTab, setMobileSearchTab] = useState(false);
  const [searchResultsArray, setSearchResultsArray] = useState([]);
  const [createEvent, setCreateEvent] = useState(false);

  const handleAddEvent = () => {
    setCreateEvent((prev) => !prev);
  };

  const handleInviteClick = () => {
    setShowInvites(!showInvites);
    setshowNotifications(false);
  };

  const handleNotificationClick = () => {
    setshowNotifications(!showNotifications);
    setShowInvites(false);
  };

  const handleSidebarToggle = () => {
    setToggleSidebar(!toggleSidebar);
  };

  const fillInvitesList = () => {
    
  }

  const fillData = (data, array, types) => {
    for (let i = 0; i < data.length; i++) {
      array.push(<Invite key={i} type={types} event={data[i]} />);
    }
  };

  const fillSearchResults = (searchResults) => {
    const array = [];
    for (let i = 0; i < searchResults.length; i++) {
      array.push(<Invite key={i} type="search" event={searchResults[i]} />);
    }
    setSearchResultsArray(array);
  };

  const performLiveSearch = (searchText) => {
    let matches = events.filter((event) => {
      const regex = new RegExp(`^${searchText}`, "gi");
      return (
        event.title.match(regex) ||
        event.category.match(regex) ||
        event.owner.match(regex)
      );
    });
    fillSearchResults(matches);
  };
  const handleEventSearch = (e) => {
    setSearchText(e.target.value);
    performLiveSearch(e.target.value);
  };

  fillData(events, invites, "invite"); // TEMPORARY , state banake behtar rhega
  fillData(events, notifications, "notif");

  return (
    <div className="header">
      <div className="brandNameContainer">
        <BrandName />
      </div>
      <div className="searchBarAnEventBtn">
        <div className="searchBar">
          <input
            type="text"
            className="searchInput"
            spellCheck="false"
            value={searchText}
            onInput={(event) => handleEventSearch(event)}
            placeholder="Search Your events..."
          />
          {searchText ? (
            <i
              className="fa fa-times"
              style={{ fontSize: "16px" }}
              onClick={() => setSearchText("")}
              id="searchIcon"
            />
          ) : (
            <i className="fa fa-search" id="searchIcon" />
          )}
          <div
            className={
              searchText ? "mainSearchResults show" : "mainSearchResults"
            }
          >
            {searchResultsArray.length ? (
              searchResultsArray
            ) : (
              <p
                style={{
                  marginTop: "20px",
                  fontSize: "14px",
                  color: "#808080",
                  textAlign: "center",
                  paddingBottom: "20px",
                }}
              >
                No search Result Found <br /> with keyword "{searchText}"
              </p>
            )}
          </div>
        </div>
        <button className="addEventBtn" onClick={handleAddEvent}>
          <i className="fa fa-plus"></i>Add Event
        </button>
        {createEvent && (
          <CreateEvent open={createEvent} handleAddEvent={handleAddEvent} />
        )}
      </div>
      <div className="headerIcons">
        <a
          href="#"
          className="invites"
          title="Invites"
          onClick={handleInviteClick}
        >
          <i
            className={showInvites ? "fa fa-times fa-lg" : "fa fa-user-plus"}
          />
        </a>
        <a
          href="#"
          className="notificationsBell"
          title="Notifications"
          onClick={handleNotificationClick}
        >
          <i
            className={showNotifications ? "fa fa-times fa-lg" : "fa fa-bell"}
          />
        </a>
      </div>
      <a
        href="#"
        className="toggleSidebar"
        title="Toggle Sidebar"
        onClick={() => handleSidebarToggle()}
      >
        <i className={toggleSidebar ? "fa fa-times fa-lg" : "fa fa-bars"} />
      </a>
      <div className={showInvites ? "allInvites show" : "allInvites"}>
        <h4
          style={{
            textAlign: "center",
            padding: "10px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          Invites
        </h4>
        <div className="invitesList">
          {invites.length == 0 ? (
            <p
              style={{
                color: "#2D3748",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              Nothing to show here
            </p>
          ) : (
            invites
          )}
        </div>
      </div>

      <div
        className={
          showNotifications ? "allNotifications show" : "allNotifications"
        }
      >
        <h4
          style={{
            textAlign: "center",
            padding: "10px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          Notifications
        </h4>
        <div className="invitesList">
          {notifications.length == 0 ? (
            <p
              style={{
                color: "#2D3748",
                fontSize: "14px",
                textAlign: "center",
                marginTop: "12px",
              }}
            >
              Nothing to show here
            </p>
          ) : (
            notifications
          )}
        </div>
      </div>
      <div
        className={
          mobileSearchTab ? "mobileSearchResults show" : "mobileSearchResults"
        }
      >
        <div className="searchBarMobile">
          <input
            type="text"
            value={searchText}
            onInput={(event) => handleEventSearch(event)}
            placeholder={"Search Your events..."}
          />
          <i
            className={searchText ? "fa fa-times" : "fa fa-arrow-left"}
            style={{
              position: "absolute",
              bottom: "22px",
              right: "20px",
              color: "#707070",
            }}
            onClick={() => {
              setSearchText("");
              setMobileSearchTab(!mobileSearchTab);
            }}
          ></i>
        </div>
        <div className="searchResultaMobile">
          {searchResultsArray.length ? (
            searchResultsArray
          ) : (
            <p
              style={{
                marginTop: "20px",
                fontSize: "14px",
                color: "#808080",
                textAlign: "center",
                paddingBottom: "20px",
              }}
            >
              No search Result Found <br /> with keyword "{searchText}"
            </p>
          )}
        </div>
      </div>
      <div className="bottomMobileNavbar">
        <a
          href="#"
          className="invites"
          title="Invites"
          onClick={handleInviteClick}
        >
          <i
            className={showInvites ? "fa fa-times fa-lg" : "fa fa-user-plus"}
          />
          <p>Invites</p>
        </a>
        <a
          href="#"
          className=""
          title="search"
          onClick={() => setMobileSearchTab(!mobileSearchTab)}
        >
          <i className="fa fa-search" />
          <p>Search</p>
        </a>
        <a
          href="#"
          className=""
          style={{ display: "flex", justifyContent: "center" }}
          title="Add Event"
        >
          <div className="addMobileEvent">
            <i
              className="fa fa-plus"
              style={{ fontSize: "21px" }}
              onClick={handleAddEvent}
            />
          </div>
        </a>
        <a
          href="#"
          className="notificationsBell"
          title="Notifications"
          onClick={handleNotificationClick}
        >
          <i
            className={showNotifications ? "fa fa-times fa-lg" : "fa fa-bell"}
          />
          <p>Notifications</p>
        </a>
        <a href="#" className="" title="Log Out">
          <i className="fa fa-sign-out-alt" />
          <p>Log Out</p>
        </a>
      </div>
    </div>
  );
}

export default Header;
