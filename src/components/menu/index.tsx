import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UploadOutlined } from '@ant-design/icons';
import "./index.css"

interface IState {
    current: string
}

export default class Navigation extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
          current: "home",
        }
    }

    render() {
        const { current } = this.state;
        return (
          <Menu selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
            <Menu.Item key="task" icon={<AppstoreOutlined />}>Task list</Menu.Item>
            <Menu.Item key="upload" icon={<UploadOutlined />}>Upload file</Menu.Item>
          </Menu>
        );
      }
}