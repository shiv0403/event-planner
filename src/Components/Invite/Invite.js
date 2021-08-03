import React from 'react'
import { Link } from 'react-router-dom'
import './Invite.css'

function Invite({type,event}) {
  if (type == "invite"){
    return(
      <div className="inviteBox" tabIndex={0}>
      <div className="inviteInfo">
        <div className="inviteEventProfilePhoto">
          <img src={event.eventPhoto} alt="" />
        </div>
        <div className="inviteEventNameAndOwner">
          <p className="inviteEventName">{event.title}</p>
          <p className="inviteEventOwner">{event.owner}</p>
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
      <div className="inviteBox" tabIndex={0}>
      <div className="inviteInfo">
        <div className="inviteEventProfilePhoto">
          <img src={event.eventPhoto} alt="" />
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
      <div className="inviteBox" tabIndex={0}>
        <div className="inviteInfo">
          <div className="inviteEventProfilePhoto">
            <img src={event.eventPhoto} alt="" />
          </div>
          <div className="inviteEventNameAndOwner">
            <p className="inviteEventName" style={{width: '320px'}}>{event.title}</p>
            <p className="inviteEventOwner">{event.owner} &middot; {event.category}</p>
          </div>
        </div>
      </div>
    )
  }
       
}

export default Invite
