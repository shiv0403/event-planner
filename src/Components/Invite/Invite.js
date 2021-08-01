import React from 'react'
import { Link } from 'react-router-dom'
import './Invite.css'

function Invite({type}) {
  if (type == "invite"){
    return(
      <div className="inviteBox">
      <div className="inviteInfo">
        <div className="inviteEventProfilePhoto">
          <img src="Amy_Baker25.jpg" alt="" />
        </div>
        <div className="inviteEventNameAndOwner">
          <p className="inviteEventName">Celebrating Priyansh's Birthday</p>
          <p className="inviteEventOwner">Priyansh</p>
        </div>
      </div>
      <div className="inviteOptions">
        <div className="inviteOption"><i className=" fa fa-check" /></div>
        <div className="inviteOption"><i className=" fa fa-times" /></div>
      </div>
    </div>
    )
  }else if (type == "notif") {
    return(
      <div className="inviteBox">
      <div className="inviteInfo">
        <div className="inviteEventProfilePhoto">
          <img src="Amy_Baker25.jpg" alt="" />
        </div>
        <div className="inviteEventNameAndOwner">
          <p className="notifText">Only 1 day left for your assigned task </p>
          <p className="inviteEventOwner">Get Decorating Materials</p>
        </div>
      </div>
    </div>
    )
  }else {
    return(
      <div className="inviteBox">
        <div className="inviteInfo">
          <div className="inviteEventProfilePhoto">
            <img src="batman.jpg" alt="" />
          </div>
          <div className="inviteEventNameAndOwner">
            <p className="inviteEventName" style={{width: '320px'}}>Celebrating Priyansh's Birthday</p>
            <p className="inviteEventOwner">Naman</p>
          </div>
        </div>
      </div>
    )
  }
       
}

export default Invite
