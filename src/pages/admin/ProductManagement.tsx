import React from 'react';
import { Link } from 'react-router-dom';

const ProductManagementPage = (props) => {
    const removeProduct = (id) => {
        props.onRemove(id)
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <table className="table table-striped table-hover">
                    <button className='btn btn-primary'>
                        <Link to={`/admin/products/add`} className="text-white">Thêm</Link>
                    </button>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props?.products.map((product,index) => {
                                return (
                                    <tr key={index}>
                                        <th>{index+1}</th>
                                        <th>{product.name}</th>
                                        <th>{product.price}</th>
                                        <th>
                                            <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Xoá</button>
                                            <button className="btn btn-primary">
                                                <Link to={`/admin/products/${product.id}/update`} className="text-white">Sửa</Link>
                                            </button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductManagementPage;