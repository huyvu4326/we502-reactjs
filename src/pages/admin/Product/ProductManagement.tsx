
import { Link } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef } from 'antd';
import { Button, Input, Space, Table } from 'antd';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { FilterConfirmProps } from 'antd/es/table/interface';

const ProductManagementPage = (props) => {
const removeProduct = (id) => {
    props.onRemove(id)
}
const data = props.products.map(item => {
    return {
        key: item.id,
        name: item.name,
        price: item.price,
        desc: item.desc,
    
    }
})
interface DataType {
  key: string;
  name: string;
  price: number;
  desc: string
}

type DataIndex = keyof DataType;

const [searchText, setSearchText] = useState('');
const [searchedColumn, setSearchedColumn] = useState('');
const searchInput = useRef<InputRef>(null);

const handleSearch = (
  selectedKeys: string[],
  confirm: (param?: FilterConfirmProps) => void,
  dataIndex: DataIndex,
) => {
  confirm();
  setSearchText(selectedKeys[0]);
  setSearchedColumn(dataIndex);
};

const handleReset = (clearFilters: () => void) => {
  clearFilters();
  setSearchText('');
};

const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
    <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
      <Input
        ref={searchInput}
        placeholder={`Search ${dataIndex}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => clearFilters && handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            confirm({ closeDropdown: false });
            setSearchText((selectedKeys as string[])[0]);
            setSearchedColumn(dataIndex);
          }}
        >
          Filter
        </Button>
        <Button
          type="link"
          size="small"
          onClick={() => {
            close();
          }}
        >
          close
        </Button>
      </Space>
    </div>
  ),
  filterIcon: (filtered: boolean) => (
    <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
  ),
  onFilter: (value, record) =>
    record[dataIndex]
      .toString()
      .toLowerCase()
      .includes((value as string).toLowerCase()),
  onFilterDropdownOpenChange: (visible) => {
    if (visible) {
      setTimeout(() => searchInput.current?.select(), 100);
    }
  },
  render: (text) =>
    searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    ),
});

const columns: ColumnsType<DataType> = [
  {
    title: 'Product Name',
    dataIndex: 'name',
    key: 'name',
    width: '15%',
    ...getColumnSearchProps('name'),
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    width: '15%',
    ...getColumnSearchProps('price'),
  },
  {
    title: 'Descriptiom',
    dataIndex: 'desc',
    key: 'desc',
    width: '40%',
    ...getColumnSearchProps('desc'),
  },
  {
    title: 'Action',
    key: 'action',
    render: (record) => (

        <Space size="middle">
            <Button style={{backgroundColor: 'red'}} type="primary" onClick={() => removeProduct(record.key)}>Remove</Button>
            <Button type="primary"><Link to={`/admin/products/${record.key}/update`}>Update</Link></Button>
        </Space>
    ),
},
];

    return <Table columns={columns} dataSource={data} pagination={{ pageSize: 5 }}/>
        // <div className="container mt-5">
        //     <div className="row">
        //         <div className="col-md-12">
        //             <table className="table table-striped table-hover">
        //             <button className='btn btn-primary'>
        //                 <Link to={`/admin/products/add`} className="text-white">Thêm</Link>
        //             </button>
        //                 <thead>
        //                     <tr>
        //                         <th>#</th>
        //                         <th>Product Name</th>
        //                         <th>Price</th>
        //                         <th>Action</th>
        //                     </tr>
        //                 </thead>
        //                 <tbody>
        //                     {props?.products.map((product,index) => {
        //                         return (
        //                             <tr key={index}>
        //                                 <th>{index+1}</th>
        //                                 <th>{product.name}</th>
        //                                 <th>{product.price}</th>
        //                                 <th>
        //                                     <button className="btn btn-danger" onClick={() => removeProduct(product.id)}>Xoá</button>
        //                                     <button className="btn btn-primary">
        //                                         <Link to={`/admin/products/${product.id}/update`} className="text-white">Sửa</Link>
        //                                     </button>
        //                                 </th>
        //                             </tr>
        //                         )
        //                     })}
        //                 </tbody>
        //             </table>
        //         </div>
        //     </div>
        // </div>
    
}

export default ProductManagementPage;