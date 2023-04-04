import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import HomePage from './components/HomePage'
import ProductPage from './components/Product'
import ProductDetailPage from './components/ProductDetail'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/Product/ProductManagement'
import AddProductPage from './pages/admin/Product/AddProduct'
import { getProducts, addProduct, deleteProducts, updateProduct } from './api/product';
import { getCategories } from './api/category';
import UpdateProductPage from './pages/admin/Product/UpdateProduct'
import AdminLayout from './pages/Layouts/AdminLayout'
import WebsiteLayout from './pages/Layouts/WebsiteLayout'
import Signin from "./pages/admin/Auth/signIn";
import { IProduct } from "./interfaces/product";

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getProducts().then((response) => {
    setProducts(response.data.docs);
  });
  }, []);
  useEffect(() => {
    getCategories().then((response) => {
      setCategories(response.data.docs);
    });
  }, []);
  const onHandleRemove = (id: string|number) => {
    deleteProducts(id).then(() => {
      setProducts(products.filter((item) => item.id !== id));
    });
  };
  const onHandleAdd = (product:IProduct) => {
    // console.log(product);
    
    addProduct(product).then(() => {
      // setProducts([...products, product]);
      getProducts().then(({data}) => setProducts(data))
    });
  };
  
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() => {
      setProducts(products.map((item) => (item.id === product.id ? product : item)));
    });
  };
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path='products'>
              <Route index element={<ProductPage products={products} onRemove={onHandleRemove} categories={categories}/>} />
              <Route path=':id' element={<ProductDetailPage products={products} categories={categories}/>} />
            </Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="login" index element={<Signin/>}/>
            <Route path='products' >
              <Route index element={<ProductManagementPage products={products} onRemove={onHandleRemove} categories={categories}/>} />
              <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={<UpdateProductPage onUpdate={onHandleUpdate} products={products} categories={categories}/>} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App