import React, {Fragment} from 'react';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import Core from './components/Core';

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
              <Link to="/">Home</Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="2">Tom</Menu.Item>
              <Menu.Item key="3">
              <Link to="/bill">Bill</Link>
              </Menu.Item>
              <Menu.Item key="4">Alex</Menu.Item>
            </SubMenu>
            <Menu.Item key="5" icon={<FileOutlined />}>
            <Link to="/core">Core</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Route path="/" exact component={Home} />
            <Route path="/bill"  component={Bill} />
            <Route path="/core"  component={Core} />
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

const Bill = () => (
    <Fragment>
        <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>User</Breadcrumb.Item>
        <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
        </div>
    </Fragment>
);

const FakeText = () => (
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    )

// ReactDOM.render(<SiderDemo />, document.getElementById('container'));
export default SiderDemo;