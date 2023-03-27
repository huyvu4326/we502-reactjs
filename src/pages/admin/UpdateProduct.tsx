import React, { useEffect, useState }from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateProductPage = (props) => {
    const navigate = useNavigate()
    const { id } = useParams();
    console.log(id)
    const [product, setProduct] = useState({})
    console.log(props.products)
    useEffect(() => {
        const product = props.products.find(item => item.id == id)
        setProduct(product)
    }, [id])

    const [inputValue, setInputValue] = useState({})
    const onHandleChange = (e) => {
        const {name, value} = e.target
        setInputValue({...inputValue, [name]: value})
    }
    
    const onHandleSubmit = (e) => {
        e.preventDefault()
        const updateData = {...product, ...inputValue}
        props.onUpdate(updateData);
        navigate('/admin/products')
    }
  return (
    <div>
        <form action="" onSubmit={onHandleSubmit}>
            <input type="text" defaultValue={product?.name} onChange={onHandleChange} name='name' />
            <input type="number" defaultValue={product?.price} onChange={onHandleChange} name="price" />
            <button type="submit">Update</button>
        </form>
    </div>
  )
}

export default UpdateProductPage;