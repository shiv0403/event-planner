import React from 'react';
import './Sidebar.css';
import BrandName from '../BrandName/BrandName'

function Sidebar({toggleSidebar}) {
    return (
       <div className={toggleSidebar ? "sidebarContainer show" : "sidebarContainer"}>
        <div className="topSidebar">
          <BrandName/>
        </div>
        <div className="sidebarSections">
          <div className="pageLinkSection">
            <p className="sectionHeading">MAIN</p>
            <div className="sectionLinks">
              <a href="#" className="pageLink active">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Home</p>
              </a>
              <a href="#" className="pageLink">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Profile</p>
              </a>
              <a href="#" className="pageLink">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Link Accounts</p>
              </a>
            </div>
          </div>
          <div className="pageLinkSection">
            <p className="sectionHeading">CONFIGURATION</p>
            <div className="sectionLinks">
              <a href="#" className="pageLink">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Privacy</p>
              </a>
              <a href="#" className="pageLink">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Accounts</p>
              </a>
              <a href="#" className="pageLink">
                <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 24 24" className="css-0" height={24} width={24} xmlns="http://www.w3.org/2000/svg"><path d="M5,21h14c1.103,0,2-0.897,2-2V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z M5,5h14l0.001,14H5 V5z" /><path d="M13.553 11.658L9.553 9.658 7.105 14.553 8.895 15.447 10.447 12.342 14.447 14.342 16.895 9.447 15.105 8.553z" /></svg>
                <p>Log Out</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Sidebar
