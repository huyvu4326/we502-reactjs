// AdminPage.js
import React, { useState } from 'react';
import AddProductPage from './AddProduct';
import ProductManagementPage from './ProductManagement';
import { addProduct, deleteProduct } from '../../api/product';

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = async (newProduct) => {
    const addedProduct = await addProduct(newProduct);
    setProducts([...products, addedProduct]);
  };

  const handleRemoveProduct = async (productId) => {
    await deleteProduct(productId);
    setProducts(products.filter((product) => product.id !== productId));
  };

  return (
    <div>
      <AddProductPage onAdd={handleAddProduct} />
      <ProductManagementPage products={products} onRemove={handleRemoveProduct} />
    </div>
  );
};

export default Dashboard;
