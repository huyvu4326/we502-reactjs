import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import ProductPage from './components/Product'
import ProductDetailPage from './components/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/Product/ProductManagement'
import AddProductPage from './pages/admin/Product/AddProduct'
import { addProduct, updateProduct } from './api/product'
import UpdateProductPage from './pages/admin/Product/UpdateProduct'
import AdminLayout from './pages/Layouts/AdminLayout'
import WebsiteLayout from './pages/Layouts/WebsiteLayout'

function App() {
  const [products, setProduct] = useState([])
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProduct(data))
  }, [])

  const onHandleRemove = (id) => {

    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE'
    }).then(() => setProduct(products.filter(item => item.id != id)))
  }
  const onHandleAdd = (product) => {
    addProduct(product)
  }
  const onHandleUpdate = (product) => { // hàm xử lý khi submit form update
    updateProduct(product).then(() => setProduct(products.map(item => item.id == product.id ? product : item)))
  }
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
              <Route path=':id' element={<ProductDetailPage products={products} />} />
            </Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove}/>} />
              <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App