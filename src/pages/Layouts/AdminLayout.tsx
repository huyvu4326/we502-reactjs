import React from 'react'
import { Outlet } from 'react-router-dom'
import MenuAdmin from './admin/Menu'
import ProductManagementPage from '../admin/Product/ProductManagement'
import FooterAdmin from './admin/Footer'


const AdminLayout = () => {
  
    return (
        <div>
            <div style={{display: 'flex'}}>
                <aside >< MenuAdmin/></aside>
                <main style={{width: '100%'}}>
                    <Outlet><ProductManagementPage/></Outlet>
                </main> 
            </div>
            <div style={{position: 'fixed', bottom: '0', left: '0', width: '100%' }}>
            <footer><FooterAdmin/></footer>
            </div>
        </div>
    )  
        
}

export default AdminLayout