import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom'
import './Invite.css'


function Invite({type,event}) {

  const acceptInviteReqeuest = async (e) => {
    const clickedBtn = e.target;
    const inviteBox = clickedBtn.closest('.inviteBox');
    clickedBtn.classList.add('fa-spinner','fa-spin');
    try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log(response)
    clickedBtn.classList.remove('fa-spinner','fa-spin');
    if (response.status === 201){
      inviteBox.innerHTML = `<p style="font-size:20px; width:100%; text-align:center; padding:10px;">Accepted!</p>`;
      inviteBox.style.animation = 'acceptAndDecline forwards ease 0.5s'
      setTimeout(() => inviteBox.remove(),500);
    }else{
      alert('Could not Accept Request, please try again later');
    }
  }catch(e){
    clickedBtn.classList.remove('fa-spinner','fa-spin');
    alert(e.message);
  }
  }
  
  const declineInviteRequest = async (e) => {
    const clickedBtn = e.target;
    const inviteBox = clickedBtn.closest('.inviteBox');
    clickedBtn.classList.toggle('fa-times');
    clickedBtn.classList.add('fa-spinner','fa-spin');
    try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
    console.log(response)
    clickedBtn.classList.remove('fa-spinner','fa-spin');
    if (response.status === 201){
      inviteBox.innerHTML = `<p style="font-size:20px; width:100%; text-align:center; padding:10px;">Declined!</p>`;
      inviteBox.style.animation = 'acceptAndDecline forwards ease 0.5s'
      setTimeout(() => inviteBox.remove(),500);
    }else{
      alert('Could not Decline Request, please try again later');
    }
  }catch(e){
    clickedBtn.classList.toggle('fa-times');
    clickedBtn.classList.remove('fa-spinner','fa-spin');
    alert(e.message);
  }
  }

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
        <div className="inviteOption" onClick={acceptInviteReqeuest}><i className=" fa fa-check" /></div>
        <div className="inviteOption" onClick={declineInviteRequest}><i className=" fa fa-times" /></div>
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
