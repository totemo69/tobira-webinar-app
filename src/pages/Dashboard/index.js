import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Sidebar from '@/components/Elements/Sidebar';
import { useState } from 'react';
import Layout from '@/components/Elements/Layout';
import Content from '@/components/Elements/Content';
import Header from '@/components/Modules/Header';
import Div from '@/components/Elements/Div';
import Image from '@/components/Elements/Image';
import Logo from '@/components/Elements/Logo';
import Dropdown from '@/components/Elements/Dropdown';
import Footer from '@/components/Elements/Footer';
import Menu from '@/components/Elements/Menu';
import SubMenu from '@/components/Elements/Submenu';
import Profile from '../profile';
import WebinarListPage from './Pages/ListOfWebinar';
import CreateWebinar from './Pages/CreateWebinar';
import  Link  from '@/components/Elements/Link';

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
    },
    {
      Content: <CreateWebinar />
    }
  ];

  const selectProfile = () =>{
    setRoute(0);
  };

  const selectAccount = () =>{
    setRoute(1);
  };
  const selectListOfWebinar = () =>{
    setRoute(2);
  };

  const selectCreateWebinar = () =>{
    setRoute(3);
  };

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
            <SubMenu title="Webinars">
              <Menu.Item onClick={() => selectCreateWebinar()}>
                  Create Webinar
              </Menu.Item>
              <Menu.Item onClick={() => selectListOfWebinar()}>
                  List of Webinar
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sidebar>
        <Layout>
          <Header>
            <Div widthFull noMargin right>
              <Image src={"Images/avatar.svg"} alt="Tobira Logo" userImg />
              <Dropdown username="tobirauser" items={menu}/>
            </Div>
          </Header>
          <Content heightFull>
            {ActiveRoute[selectedRoute].Content}
          </Content>
          <Footer>Copyright © 2021 Tobira Webinar Video Communications, Inc. All rights reserved. <Link href="/TermsofService-example" name=" Terms of Service"></Link> {" "} and {" "} <Link href="/PrivacyPolicy-example" name=" Privacy Policy"></Link></Footer>
        </Layout>
      </Layout>
    </>
  );
}
export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['translation']),
  },
});