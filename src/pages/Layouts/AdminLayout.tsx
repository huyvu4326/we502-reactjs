import React from "react";
import { Outlet } from "react-router-dom";
import MenuAdmin from "./admin/Menu";
import ProductManagementPage from "../admin/Product/ProductManagement";
import FooterAdmin from "./admin/Footer";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const AdminLayout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div>
        <div className="header"  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '70px'}}>
        <h3 style={{margin: '0 auto'}}><a href="/">Hà Huy Vũ</a></h3>
        <Button type="primary" onClick={handleLogout}>
          Đăng xuất
        </Button>
        </div>
      <div style={{ display: "flex" }}>
        <aside>
          <MenuAdmin />
        </aside>
        <main style={{ width: "100%" }}>
          <Outlet>
            <ProductManagementPage />
          </Outlet>
        </main>
      </div>
      <div style={{ position: "fixed", bottom: "0", left: "0", width: "100%" }}>
        <footer>
          <FooterAdmin />
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;
