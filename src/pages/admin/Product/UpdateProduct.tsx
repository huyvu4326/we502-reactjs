import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input } from 'antd';

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
    const { register, handleSubmit, reset } = useForm()
    const { id } = useParams() // lấy id từ url
    useEffect(() => {
        const currentProduct = props.products.find(item => item.id == id) // tìm product có id trùng với id trên url
        reset(currentProduct) // reset lại form với giá trị của product
    }, [props])
    const onFinish = (values: any) => {
        props.onUpdate(values);
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
                    label="Product Name "
                    name="name"
                    // rules={[{ required: true, message: 'Vui lòng nhập tên sản phẩm!' }]}
                >
                    <Input value={"${products.name}"}/>
                </Form.Item>

                <Form.Item
                    label="Product Price"
                    name="price"
                    // rules={[{ required: true, message: 'Vui lòng nhập giá sản phẩm!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Product Description"
                    name="desc"
                    // rules={[{ required: true, message: 'Vui lòng nhập mô tả sản phẩm!' }]}
                >
                    <Input />
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