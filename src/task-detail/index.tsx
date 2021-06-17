import React from 'react';
import { PageHeader, Descriptions } from 'antd';
import { Table } from 'antd';
import { GetTasksByFileID } from '../axios/api'

const columns = [
    {
      title: 'command ID',
      dataIndex: 'commandID',
      key: 'commandID',
    },
    {
      title: 'file ID',
      dataIndex: 'fileID',
      key: 'fileID',
    },
    {
      title: 'solver',
      dataIndex: 'solver',
      key: 'solver',
    },
    {
      title: 'encode',
      dataIndex: 'encode',
      key: 'encode',
    },
    {
      title: 'verificate',
      dataIndex: 'verificate',
      key: 'verificate',
    },
    {
      title: 'k',
      dataIndex: 'k',
      key: 'k',
    },
    {
      title: 'result',
      dataIndex: 'result',
      key: 'result',
    },
    {
      title: 'timeConsumer',
      dataIndex: 'timeConsumer',
      key: 'timeConsumer',
    }
]

interface IState {
  data: []
}

export default class TaskDetail extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: []
    } as IState

  }

  componentDidMount() {
    const params = {
      fileID: "527"
    }
    GetTasksByFileID(params).then((resp: any) => {
      this.setState({
        data: resp
      })
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
                <Table columns={columns} dataSource={this.state.data} pagination={{ pageSize: 20 }} />
            </div>
        )
    }
}