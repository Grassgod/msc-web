import React from 'react';
import { PageHeader, Descriptions } from 'antd';
import { Table } from 'antd';
import { GetTasksByFileID } from '../axios/api'

const columns = [
    {
      title: 'parameter 1',
      dataIndex: 'parameter_1',
      key: 'parameter_1',
    },
    {
      title: 'parameter 2',
      dataIndex: 'parameter_2',
      key: 'parameter_2',
    },
    {
      title: 'parameter 3',
      dataIndex: 'parameter_3',
      key: 'parameter_3',
    },
    {
      title: 'parameter 4',
      dataIndex: 'parameter_4',
      key: 'parameter_4',
    },
    {
      title: 'parameter 5',
      dataIndex: 'parameter_5',
      key: 'parameter_5',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    }
]

const data = [
    {
        parameter_1: 'parameter 1',
        parameter_2: 'parameter 2',
        parameter_3: 'parameter 3',
        parameter_4: 'parameter 4',
        parameter_5: 'parameter 5',
        status: 'Success'
    },
    {
        parameter_1: 'parameter 1',
        parameter_2: 'parameter 2',
        parameter_3: 'parameter 3',
        parameter_4: 'parameter 4',
        parameter_5: 'parameter 5',
        status: 'Success'
    },
    {
        parameter_1: 'parameter 1',
        parameter_2: 'parameter 2',
        parameter_3: 'parameter 3',
        parameter_4: 'parameter 4',
        parameter_5: 'parameter 5',
        status: 'Success'
    },
    {
        parameter_1: 'parameter 1',
        parameter_2: 'parameter 2',
        parameter_3: 'parameter 3',
        parameter_4: 'parameter 4',
        parameter_5: 'parameter 5',
        status: 'Failed'
    },
    {
        parameter_1: 'parameter 1',
        parameter_2: 'parameter 2',
        parameter_3: 'parameter 3',
        parameter_4: 'parameter 4',
        parameter_5: 'parameter 5',
        status: 'Time out'
    },
]

export default class TaskDetail extends React.Component {

  componentDidMount() {
    const params = {
      fileID: "527"
    }
    GetTasksByFileID(params).then((resp: any) => {
      console.log(resp)
    })
  }


    render() {
        return (
            <div className="site-page-header-ghost-wrapper">
                <PageHeader
                ghost={false}
                onBack={() => window.history.back()}
                title="Task details"
                >
                <Descriptions size="small" column={5}>
                    <Descriptions.Item label="File Name">file_1</Descriptions.Item>
                    <Descriptions.Item label="Total Command">5</Descriptions.Item>
                    <Descriptions.Item label="Success">3</Descriptions.Item>
                    <Descriptions.Item label="Failed">1</Descriptions.Item>
                    <Descriptions.Item label="Timed out">1</Descriptions.Item>
                </Descriptions>
                </PageHeader>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}