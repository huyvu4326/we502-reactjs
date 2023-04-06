import { Link } from "react-router-dom";
import React, { useRef, useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ICategory } from "../../../interfaces/category";
import { getCategories } from "../../../api/category";

const CategoriesManagementPage = (props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const removeCategory = (id: ICategory) => {
    props.onRemove(id);
  };
  const data = Array.isArray(props.categories)
    ? props.categories.map((item) => {
        const category = categories?.find((cat) => cat._id === item.categoryId);
        return {
          key: item._id,
          name: item.name,
        };
      })
    : [];
    
  useEffect(() => {
    getCategories()
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  interface DataType {
    key: string;
    name: string;
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
      width: "60%",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button
            style={{ backgroundColor: "red" }}
            type="primary"
            onClick={() => removeCategory(record.key)}
          >
            Remove
          </Button>
          <Button type="primary">
            <Link to={`/admin/categories/${record.key}/update`}>Update</Link>
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <Table columns={columns} dataSource={categories} pagination={{ pageSize: 5 }} />
  );
};

export default CategoriesManagementPage;
