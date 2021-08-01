import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import Mainbody from '../Components/MainBody/Mainbody'
import './Layout.css';

function Layout() {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    return (
        <div>
            <Sidebar toggleSidebar={toggleSidebar} />
             <div className="pageWrapper">
                <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
                <Mainbody/>
             </div>
        </div>
    )
}

export default Layout
