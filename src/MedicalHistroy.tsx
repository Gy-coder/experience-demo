import React from 'react';
import { Layout, Menu, Button, Table } from 'antd';
import Icon from './Icon';
import Block from './Block';

const { Header, Footer, Sider, Content } = Layout;
const dataSource = [
  {
    key: '1',
    name: '张三',
    age: 32,
    gender: '男',
    address: 'd544fb0278ba870a025efc60e55ac4e7618cc714',
    button: <Button>查看详情</Button>,
  },
  {
    key: '2',
    name: '王五',
    age: 42,
    gender: '男',
    address: 'ae7d98f610a959896cf4e62fce9db32c0403d4a4',
    button: <Button>查看详情</Button>,
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '性别',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: '用户地址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '详细数据',
    dataIndex: 'button',
    key: 'button',
  },
];

const Component = () => {
  return (
    <Layout>
      <Header
        style={{
          height: '10vh',
          background: '#5ab8ad',
          color: '#fff',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Icon name="gongsi" />
        基于区块链的医疗保险系统实现 - 医院端
      </Header>
      <Layout style={{ height: '90vh' }}>
        <Sider style={{ background: '#5ab8ad' }}>
          <Menu style={{ background: '#5ab8ad' }}>
            <Menu.Item>数据管理</Menu.Item>
            <Menu.Item>数据上传</Menu.Item>
            <Menu.Item>用户信息</Menu.Item>
          </Menu>
        </Sider>
        <Content
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '15%',
              padding: 16,
            }}
          >
            <h2>欢迎您！XX医院</h2>
            <Button>上传数据</Button>
          </div>
          <h3 style={{ padding: 16 }}>历史上传数据</h3>
          <Table
            dataSource={dataSource}
            columns={columns}
            style={{ width: '100%', height: '100%', margin: 8 }}
          />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Component;
