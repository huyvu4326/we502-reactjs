import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';

interface IProduct{
    id: number,
    name: string,
    price: number
};
interface IProps{
    onAdd: (product:IProduct) => void
}
const AddProductPage = (props:IProps) => { 
    const navigate = useNavigate()
    const onFinish = (values: any) => {
        props.onAdd(values);
        navigate('/admin/products')
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
            >
                <Form.Item
                    label="Product Name"
                    name="name"
                    rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="desc"
                    rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProductPage
