import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';

interface IProduct{
    id: number,
    name: string,
    price: number,
    desc: string
};
interface IProps{
    onUpdate: (product:IProduct) => void
}

const UpdateProductPage = (props:IProps) => {
    const navigate = useNavigate()
    const[form]= Form.useForm();
    const { id } = useParams() // lấy id từ url
    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
          .then(response => {
            console.log(response.data);
            form.setFieldsValue(response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }, []);
    
    const onFinish = (data) => {
        const updateProduct = {
            id: parseInt(id),
            ...data
        };
        props.onUpdate(updateProduct);
        navigate('/admin/products')
        message.success('Cập nhật sản phẩm thành công!', 2);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ width: 600, margin: '0 auto' }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                form={form} 
                onFinish={onFinish}
                autoComplete="off" 
            >
                
                <Form.Item
                    label="Product Name "
                    name="name"
                    // rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                >
                     <Input value={`${form.getFieldValue('name')}`} />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    // rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
                >
                     <Input value={`${form.getFieldValue('price')}`} />
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="desc"
                    // rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
                >
                     <Input value={`${form.getFieldValue('desc')}`} />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Cập nhật sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default UpdateProductPage;