import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UploadOutlined } from '@ant-design/icons';
import "./index.css"
import { withRouter } from 'react-router-dom'

interface IState {
    current: string
}

class Navigation extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
          current: localStorage.getItem('current') || 'home',
        }
    }

    goToHomepage() {
        this.props.history.push('/')
        localStorage.setItem('current', 'home')
    }

    goToTaskListPage() {
        this.props.history.push('/task-list')
        localStorage.setItem('current', 'task')
    }

    goToUploadFilePage() {
        this.props.history.push('/upload')
        localStorage.setItem('current', 'upload')
    }

    render() {
        const { current } = this.state;
        return (
          <Menu selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => this.goToHomepage()}>Home</Menu.Item>
            <Menu.Item key="task" icon={<AppstoreOutlined />} onClick={() => this.goToTaskListPage()}>Task list</Menu.Item>
            <Menu.Item key="upload" icon={<UploadOutlined />} onClick={() => this.goToUploadFilePage()}>Upload file</Menu.Item>
          </Menu>
        );
      }
}

export default withRouter(Navigation)