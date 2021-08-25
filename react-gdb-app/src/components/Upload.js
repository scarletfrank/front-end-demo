import React from 'react';
import { Row, Col } from 'antd';
import PhotoUpload from './PhotoUpload';
import NodeUpload from './NodeUpload';
import EdgeUpload from './EdgeUpload';

class Upload extends React.Component {
    render() {
        return (

            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <PhotoUpload></PhotoUpload>
                    </Col>
                    <Col span={8}>
                        <NodeUpload></NodeUpload>
                    </Col>
                    <Col span={8}>
                        <EdgeUpload></EdgeUpload>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default Upload;