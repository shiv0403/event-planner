import React, { useState } from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import HomeIcon from "@material-ui/icons/Home";
import LinkIcon from "@material-ui/icons/Link";
import LockIcon from "@material-ui/icons/Lock";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import "./Sidebar.css";
import BrandName from "../BrandName/BrandName";
import { Link } from "react-router-dom";
import Privacy from "../Privacy/Privacy";

function Sidebar({ toggleSidebar }) {
  const [openPrivacy, setOpenPrivacy] = useState(false);
  const [isActive, setIsAcitve] = useState(true);

  const handleOpen = () => {
    setOpenPrivacy(true);
  };

  const handleClose = () => {
    setOpenPrivacy(false);
  };

  return (
    <div
      className={toggleSidebar ? "sidebarContainer show" : "sidebarContainer"}
    >
      <div className="topSidebar">
        <BrandName />
      </div>
      <div className="sidebarSections">
        <div className="pageLinkSection">
          <p className="sectionHeading">MAIN</p>
          <div className="sectionLinks">
            <Link to="/" style={{ textDecoration: "none" }}>
              <a
                href="#"
                className={isActive ? "pageLink active" : "pageLink"}
                onClick={handleActive}
              >
                <HomeIcon />
                <p>Home</p>
              </a>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <a href="#" className="pageLink" onClick={handleActive}>
                <AccountBoxIcon />

                <p>Profile</p>
              </a>
            </Link>
          </div>
        </div>
        <div className="pageLinkSection">
          <p className="sectionHeading">CONFIGURATION</p>
          <div className="sectionLinks">
            <a href="#" className="pageLink" onClick={handleActive}>
              <LockIcon />
              <p onClick={handleOpen}>Privacy</p>
              {openPrivacy && (
                <Privacy open={openPrivacy} handleClose={handleClose} />
              )}
            </a>
            <Link to="/accounts" style={{ textDecoration: "none" }}>
              <a href="#" className="pageLink" onClick={handleActive}>
                <SupervisorAccountIcon />

                <p>Accounts</p>
              </a>
            </Link>
            <Link to="/logout" style={{ textDecoration: "none" }}>
              <a href="#" className="pageLink" onClick={handleActive}>
                <ExitToAppIcon />
                <p>Log Out</p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
