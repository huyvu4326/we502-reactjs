import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ProductPage from './pages/Product'
import ProductDetailPage from './pages/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagement'
import AddProductPage from './pages/admin/AddProduct'
import UpdateProductPage from './pages/admin/UpdateProduct'
import { addProduct, updateProduct, deleteProduct, getAllProduct } from './api/product'

function App() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    (async () => {
      const { data } = await getAllProduct()
      setProducts(data)
    })()
  }, [])
  const onHandleRemove = (id) => {
    deleteProduct(id).then(() => {
      setProducts(products.filter(product => product.id != id))
    })
  }
  const onHandleAdd=(product)=>{
     addProduct(product)
  }
  const onHandleUpdate=(product)=>{
    updateProduct(product).then(()=>{
      const data=products.map(item=>item.id==product.id?product:item)
      setProducts(data)
    })
  }
  return (
    <div className="App">
      {}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductPage products={products} onRemove={onHandleRemove} />} />
          <Route path='/products/:id' element={<ProductDetailPage products={products} />} />
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/products' element={<ProductManagementPage products={products} onRemove={onHandleRemove} onUpdate={onHandleUpdate} />} />
          <Route path='/admin/products/add' element={<AddProductPage onAdd={onHandleAdd} />} />
          <Route path='/admin/products/:id/update' element={<UpdateProductPage products={products} onUpdate={onHandleUpdate} />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;