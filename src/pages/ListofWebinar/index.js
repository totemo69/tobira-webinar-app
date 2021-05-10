import Sidebar from '@/components/Elements/Sidebar';
import { useState } from 'react'
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Header from '@/components/Elements/Header';
import Logo from '@/components/Elements/Logo';
import Dropdown from '@/components/Elements/Dropdown'
import Footer from '@/components/Elements/Footer'
import Menu from '@/components/Elements/Menu';
import Submenu from '@/components/Elements/Submenu';
import Profile from './Pages/EditProfile';
import WebinarListPage from './Pages/ListOfWebinar';
import  Link  from '@/components/Elements/Link';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {
  DownOutlined,
  UserOutlined,
  ProfileFilled
} from '@ant-design/icons'


export default function ListOfWebinar(){

  const [selectedRoute, setRoute] = useState(0);

  const ActiveRoute = [
    {
      Content: <Profile />
    },
    {
      Content: "Accounts"
    },
    {
      Content: <WebinarListPage />
    }
  ]

  const selectProfile = () =>{
    setRoute(0);
  }

  const selectAccount = () =>{
    setRoute(1);
  }
  const selectListOfWebinar = () =>{
    setRoute(2);
  }

  const menu = (
    <Menu>
      <Menu.Item onClick={() => selectProfile()}>
       Profile
      </Menu.Item>
      <Menu.Item key="1" onClick={() => selectAccount()}>
        Account
      </Menu.Item>
      <Menu.Item key="2">
        Purchase License
      </Menu.Item>
      <Menu.Item key="3">
        Wallet
      </Menu.Item>
      <Menu.Divider></Menu.Divider>
      <Menu.Item key="4">
        Log out
      </Menu.Item>
    </Menu>
  );



 
  
  return(
    <>
      <Layout>
        <Sidebar>
            <Logo sideBarLogo src={'Images/logo.svg'}/>
            <Menu mode="inline">
              <Submenu title="Webinars">
                <Menu.Item>
                  Create Webinar
                </Menu.Item>
                <Menu.Item onClick={() => selectListOfWebinar()}>
                  List of Webinar
                </Menu.Item>
              </Submenu>
            </Menu>
        </Sidebar>
       <Layout>
          <Header>
            <Dropdown overlay={menu} trigger={['click']}>
              <a>Tobirauser <DownOutlined/></a>
            </Dropdown>
          </Header>
            <Content> 
              {ActiveRoute[selectedRoute].Content}
            </Content>
          <Footer>Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="/TermsofService-example" name=" Terms of Service"></Link> {" "} and {" "} <Link href="/PrivacyPolicy-example" name=" Privacy Policy"></Link></Footer>
        </Layout>
      </Layout>
    </>
  )
}