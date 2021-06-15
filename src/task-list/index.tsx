import React from 'react';
import './index.css';
import { Table, Space } from 'antd';
import Navigation from '../components/menu'
import { Link } from 'react-router-dom'
import { GetAllFiles } from '../axios/api'

const columns = [
    {
      title: 'File Name',
      dataIndex: 'fileName',
      key: 'fileName',
    },
    {
      title: 'Total Command',
      dataIndex: 'totalCommand',
      key: 'totalCommand',
    },
    {
      title: 'Success',
      dataIndex: 'success',
      key: 'success',
    },
    {
      title: 'Failed',
      dataIndex: 'failed',
      key: 'failed',
    },
    {
      title: 'Timeout',
      dataIndex: 'timeout',
      key: 'timeout',
    },
    {
      title: 'Detail',
      key: 'detail',
      render: () => (
        <Space size="middle">
          <Link to="/task-detail">
            View
          </Link>
        </Space>
      ),
    },
  ];

const data = [
    {
      fileName: 'file_1',
      totalCommand: 30,
      success: 30,
      failed: 0,
      timeout: 0,
      detail: 'view'
    },
    {
      fileName: 'file_2',
      totalCommand: 48,
      success: 40,
      failed: 3,
      timeout: 5,
      detail: 'view'
    },
    {
      fileName: 'file_3',
      totalCommand: 38,
      success: 32,
      failed: 4,
      timeout: 2,
      detail: 'view'
    },
  ];

export default class TaskList extends React.Component {

  componentDidMount() {
    GetAllFiles().then((resp: any) => {
      console.log(resp)
    })
  }
  
  render() {
    return (
      <div className="task-container">
        <Navigation />
        <div className="table-container">
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    )
  }
}