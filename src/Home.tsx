import React from 'react';
import { Layout, Menu } from 'antd';
import Icon from './Icon';
import Block from './Block';

const { Header, Footer, Sider, Content } = Layout;

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
        基于区块链的医疗保险系统实现
      </Header>
      <Layout style={{ height: '90vh' }}>
        {/* <Sider style={{background: '#5ab8ad'}}>
          <Menu>
            <Menu.Item>菜单项一</Menu.Item>
            <Menu.Item>菜单项二</Menu.Item>
          </Menu>
        </Sider> */}
        <Content
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Block message="医院端" name="yiyuan" />
          <Block message="投保人端" name="yonghu" />
          <Block message="保险公司端" name="gongsi" />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Component;
