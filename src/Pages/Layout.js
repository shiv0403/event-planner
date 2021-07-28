import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Header from '../Components/Header/Header'
import Mainbody from '../Components/MainBody/Mainbody'

function Layout() {
    return (
        <div>
            <Sidebar/>
             <div className="pageWrapper" style={{marginLeft:"240px"}}>
                <Header/>
                <Mainbody/> {/* abhi toh aise hi bna diya hai yeh function, baad me sochte hai structure */}
             </div>
        </div>
    )
}

export default Layout
