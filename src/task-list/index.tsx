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
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: 'Success',
      dataIndex: 'success',
      key: 'success',
    },
    {
      title: 'Failure',
      dataIndex: 'failure',
      key: 'failure',
    },
    {
      title: 'Timeout',
      dataIndex: 'timeout',
      key: 'timeout',
    },
    {
      title: 'Unknown',
      dataIndex: 'unknown',
      key: 'unknown',
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

interface IState {
  data: []
}
export default class TaskList extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    } as IState;
  }

  componentDidMount() {
    GetAllFiles().then((resp: any) => {
      this.setState({ data: resp });
    })
  }
  
  render() {
    return (
      <div>
        <Navigation />
        <div className="table-container">
          <Table columns={columns} dataSource={this.state.data} />
        </div>
      </div>
    )
  }
}