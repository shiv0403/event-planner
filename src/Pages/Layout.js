import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import Mainbody from '../Components/MainBody/Mainbody'
import './Layout.css';
import Analytics from './Analytics/Analytics';




function Layout() {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    window.scrollTo(0,1);
    return (
        <div>
            <Sidebar toggleSidebar={toggleSidebar} />
             <div className="pageWrapper">
                <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
                <Mainbody/>
                {/* <Analytics/> */}
             </div>
        </div>
    )
}

export default Layout
