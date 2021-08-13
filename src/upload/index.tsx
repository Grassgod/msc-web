import React from 'react';
import './index.css'
import Navigation from '../components/menu'
import {Select, Upload, message, Button} from 'antd'
import {UploadOutlined} from '@ant-design/icons'

const {Option} = Select

const uploadProps = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info: any) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class UploadFile extends React.Component {

    render() {
        return (
            <div>
                <Navigation/>
                <div className='upload-container'>
                    <div>
                        <span>Select Type: </span>
                        <Select defaultValue="float" style={{width: 120}}>
                            <Option value="float">Float</Option>
                            <Option value="loop">Loop</Option>
                            <Option value="array">Array</Option>
                        </Select>
                    </div>
                    <Upload className='upload' {...uploadProps}>
                        <Button icon={<UploadOutlined/>}>Click to Upload File</Button>
                    </Upload>
                </div>
            </div>
        )
    }
}