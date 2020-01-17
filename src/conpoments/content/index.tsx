import React from 'react';
import {BrowserRouter,Switch,Route,Link} from 'react-router-dom';
import Fruits from './fruits/Index';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './index.css';
import menuData from './menuData';

interface MenuList{
  url?:string
  des:string
  icon?:string
  key:string
  children?:Array<MenuList>
}

const Index:React.FC=()=>{
    const { SubMenu,Item } = Menu;
    const { Header, Content, Footer, Sider } = Layout;
    const menuList=(menuData:Array<MenuList>)=>{
        return menuData.map((value,key)=>{
          if(!value.children){
            return(
              <Item key={value.key}>
                <Link to={value.url||''}><Icon type={value.icon} />{value.des}</Link>
              </Item>
            )
          }else{
            return(
              <SubMenu
                key={value.key}
                title={
                  <span>
                    <Icon type={value.icon} />
                    <span>{value.des}</span>
                  </span>
                }
              >
                {menuList(value.children)}
              </SubMenu>
            )
          }
        })
    }
    return(
        <Layout>
        <Header className="header">
          <div className="logo" />
          <div className='message'>这是里头部的一些信息</div>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                {menuList(menuData)}
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight: 280 }}>
              <div>公共部分</div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    )
}

export default Index