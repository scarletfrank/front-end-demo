import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Button, message, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import reqwest from 'reqwest';

class PhotoUpload extends React.Component {
  state = {
    fileList: [],
    uploading: false,
  };

  clearState() {

  }
  handleUpload = () => {
    const { fileList } = this.state;
    const formData = new FormData();
    this.setState({
      uploading: true,
    });
    fileList.forEach(file => {
      formData.append('avatar', file);
    });

    // You can use any AJAX library you like
    reqwest({
      url: 'http://localhost:3001/v1/photo',
      method: 'post',
      processData: false,
      crossOrigin: true,
      data: formData,
      success: () => {
        this.setState({
          fileList: [],
          uploading: false,
        });
        message.success('upload successfully.');
      },
      error: () => {
        this.setState({
          uploading: false,
        });
        message.error('upload failed.');
      },
    });

    // You can use any AJAX library you like
    console.log('you post the file to a server');
  };

  render() {
    const { uploading, fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <Card title="头像上传" style={{ width: 300, margin: 30 }}>
        <Upload {...props}>
          <Button icon={<UploadOutlined />}>选择文件</Button>
        </Upload>
        <Button
          type="primary"
          onClick={this.handleUpload}
          disabled={fileList.length === 0}
          loading={uploading}
          style={{ marginTop: 16 }}
        >
          {uploading ? '上传中...' : '开始上传'}
        </Button>
      </Card>
    );
  }
}

export default PhotoUpload;