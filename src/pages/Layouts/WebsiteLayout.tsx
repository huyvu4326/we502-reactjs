import React from 'react'
import { Outlet } from 'react-router-dom'
import HomePage from '../../components/HomePage'

const WebsiteLayout = () => {
    return (
        <div>
            <header>
               <HomePage/>
            </header>
            {/* <main>
                <Outlet />
            </main>
            <footer>
                
            </footer> */}
        </div>
    )
}

export default WebsiteLayout