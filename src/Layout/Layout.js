import React, {useState} from 'react'

import Toolbar from './Toolbar/Toolbar'
import Sidebar  from './SideBar/Sidebar'
import Backdrop  from './Backdrop/Backdrop'

function Layout(props) {

    const [showSide, setOpenSide] = useState(false)

   const displaySide=()=>{
        setOpenSide(prevState=>{
        return { showSide : !prevState.showSide}
        })
    }

    const closeSide=()=>{
        setOpenSide(!showSide)
    }
  
    let openSide =showSide && <Sidebar transition={showSide} />
    let showBackdrop = showSide && <Backdrop close={closeSide} />
    
    
    return (
        <div>
            <Toolbar openSide={displaySide} />
            {openSide}
            {showBackdrop}
            <main style={{marginTop:'58px'}}>
                {props.children}
            </main>
            
        </div>
    )
}

export default Layout
