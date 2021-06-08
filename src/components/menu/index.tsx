import React from 'react';
import { Menu } from 'antd';
import { HomeOutlined, AppstoreOutlined, UploadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface IState {
    current: string
}

export default class Navigation extends React.Component<any, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
          current: 'home',
        }
    }

    render() {
        const { current } = this.state;
        return (
            <div>
                <Menu selectedKeys={[current]} mode="horizontal">
                    <Link to='/'><Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item></Link>
                    <Link to='/task-list'><Menu.Item key="task" icon={<AppstoreOutlined />}>Task list</Menu.Item></Link>
                    <Link to='/upload'><Menu.Item key="upload" icon={<UploadOutlined />}>Upload file</Menu.Item></Link>
                </Menu>
            </div>
        )
    }
}