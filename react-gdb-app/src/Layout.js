import React, {Fragment} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu} from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Board from './components/Board';
import Upload from './components/Upload';
import GTable from './components/GTable';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to="/">简介</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="导入">
              <Menu.Item key="2">
              <Link to="/node">节点</Link>
              </Menu.Item>
              <Menu.Item key="3">
              <Link to="/import">上传</Link>
              </Menu.Item>
            </SubMenu>
            <Menu.Item key="4" icon={<FileOutlined />}>
            <Link to="/core">核心图</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Route path="/" exact component={Home} />
            <Route path="/node"  component={GTable} />
            <Route path="/core"  component={Board} />
            <Route path="/import"  component={Upload} />
          </Content>
          <Footer style={{ textAlign: 'center' }}>scarlet ©2021 </Footer>
        </Layout>
      </Layout>
    </Router>

    );
  }
}

const Home = () => (
    <Fragment>
      <h1>Home</h1>
      <FakeText />
    </Fragment>
    );

const FakeText = () => (
    <p>
    这是一个React图应用的演示，前端由React编写，后端接口用Express快速搭建。后端会连接一个图数据库和一个一般的关系型数据库。
    </p>
    )

// ReactDOM.render(<SiderDemo />, document.getElementById('container'));
export default SiderDemo;