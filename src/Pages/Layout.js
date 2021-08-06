import React, {useState} from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import Mainbody from './MainBody/Mainbody'
import './Layout.css';
import Analytics from './Analytics/Analytics';




function Layout({children}) {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <div>
            <Sidebar toggleSidebar={toggleSidebar} />
             <div className="pageWrapper">
                <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
               {children}
             </div>
        </div>
    )
}

export default Layout
