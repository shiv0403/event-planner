import React, {useState} from "react";
import EventInfo from '../../Components/EventInfo/EventInfo'
import "./TestPage.css";


function TestPage() {
  const [showChatBox, setShowChatBox] = useState(false);

  return (
    <div className="testPageContainer">
      <div className="testLeftSide">
          <div className="testInfoContainer">
              <div className="testMenuBar">

              </div>
              <div className="testInfo">
                <EventInfo/>
              </div>
          </div>
      </div>
      <div className={showChatBox ? "testRightSide show" : "testRightSide" }>
        <div className="chatBoxContainer">
            <div className="testPageHeader"></div>
            <div className="testPageBody"></div>
            <div className="testPageFooter"></div>
        </div>
      </div>
      <div className="openChat" onClick={() => setShowChatBox(!showChatBox)}>

      </div>
    </div>
  );
}

export default TestPage;
