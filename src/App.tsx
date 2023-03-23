import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/addproduct'
import { addProduct } from './api/product'

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
  return (
    <div className="App">
      {/* 
        / - Homepage
        /products - Product Page
        /products/:id - Detail
      */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='/products/:id' element={<ProductDetailPage products={products} />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/products' element={<ProductManagementPage />} />
          <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;